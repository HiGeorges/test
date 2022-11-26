import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import mailer from 'src/lib/mail';
import * as timeUuid from 'time-uuid';
import { CreateUserDto } from 'src/lib/dto';
import { AuthLogin } from 'src/lib/schemas';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDocument } from 'src/lib/entities';
import { Roles, UserSTATUS } from 'src/lib/types';
import { UsersService } from 'src/modules/users/users.service';
import { LoginEmailDto, VerifyLoginTokenDto } from 'src/lib/dto/auth.dto';
import { generateOtp } from 'src/lib/utils';
import { ParseIdPipe } from 'src/lib/pipes';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    @InjectModel(AuthLogin.name)
    private readonly loginModel: Model<LoginDocument>,
    private jwtService: JwtService,
  ) {}

  async createAccount(payload: Required<NonNullable<CreateUserDto>>) {
    if (payload.role === Roles.CUSTOMER) {
      return await this.usersService.create({
        ...payload.data,
        role: Roles.CUSTOMER,
      });
    } else if (payload.role === Roles.EVENTMANAGER) {
      return await this.usersService.create({
        ...payload.data,
        role: Roles.EVENTMANAGER,
        organisationID: timeUuid(),
      });
    } else if (payload.role === Roles.TICKETSELLER) {
      return await this.usersService.create({
        ...payload.data,
        role: Roles.TICKETSELLER,
      });
    } else if (payload.role === Roles.EVENTAGENT) {
      return await this.usersService.create({
        ...payload.data,
        role: Roles.EVENTAGENT,
      });
    }
  }

  async login(loginEmailDto: Required<LoginEmailDto>) {
    const userFromDb = await this.usersService.findOne({
      email: loginEmailDto.email,
    });
    let isEmailSent = false;

    if (!userFromDb)
      throw new HttpException(
        'USER.ERROR.USER_NOT_FOUND',
        HttpStatus.UNAUTHORIZED,
      );

    const tokenModel = await this.createLoginToken(loginEmailDto.email);

    if (tokenModel && tokenModel.token)
      isEmailSent = await mailer(loginEmailDto.email, {
        subject: 'Account Verification',
        body: 'This is your code: ' + tokenModel.token,
      });
    else
      throw new HttpException(
        'LOGIN.ERROR.TOKEN_NOT_CREATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    if (isEmailSent)
      return {
        message: 'LOGIN.SUCCESS.EMAIL_SUCCESSFULLY_SENT',
        statusCode: HttpStatus.OK,
      };
    else {
      await tokenModel.delete();
      throw new InternalServerErrorException('GENERIC.ERROR.MAIL_NOT_SENT');
    }
  }

  async createLoginToken(email: string) {
    const loginToken = await this.loginModel.findOne({ email });
    console.log(loginToken);
    if (
      loginToken &&
      (new Date().getTime() - loginToken.timestamp.getTime()) / 60000 < 10
    ) {
      throw new HttpException(
        'LOGIN.ERROR.EMAIL_SENT_RECENTLY',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    return await this.loginModel.findOneAndUpdate(
      { email },
      {
        email,
        token: generateOtp(),
        timestamp: new Date(),
      },
      { upsert: true, new: true },
    );
  }

  async getProfile(_id: ParseIdPipe) {
    return await this.usersService.findOne({ _id });
  }

  async verifyLoginToken(verifyPayload: Required<VerifyLoginTokenDto>) {
    const login = await this.loginModel.findOne({
      email: verifyPayload.email,
      token: verifyPayload.token,
    });
    if (!login)
      throw new HttpException(
        'LOGIN.ERROR.INVALID_TOKEN',
        HttpStatus.UNAUTHORIZED,
      );
    else {
      await login.delete();
      const user = await this.usersService.findOne({ email: login.email });
      if (!user)
        throw new HttpException(
          'GENERIC.ERROR.LOGIN_USER_STATUS_CHANGE_FAILED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      else {
        user.status = UserSTATUS.ACTIVE;
        await user.save();
      }
      return {
        statusCode: HttpStatus.OK,
        access_token: this.jwtService.sign({
          _id: user._id,
          role: user.role,
          status: user.status,
        }),
      };
    }
  }
}
