import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { SubscribeToDto, UpdateUserDto, UserDto } from 'src/lib/dto';
import { UserDocument } from 'src/lib/entities';
import { ParseIdPipe } from 'src/lib/pipes';
import { User } from 'src/lib/schemas';
import { Roles } from 'src/lib/types';
import { SubscribersService } from '../subscribers/subscribers.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private subscribersService: SubscribersService,
  ) {}

  private uniqInput = {
    email: 'USER.ERROR.EMAIL_ALREADY_EXIST',
    username: 'USER.ERROR.USERNAME_ALREADY_EXIST',
    organisationID: 'USER.ERROR.ORGANISATION_ID_ALREADY_EXIST',
    organisationName: 'USER.ERROR.ORGANISATION_NAME_ALREADY_EXIST',
    phoneNumber: 'USER.ERROR.PHONE_NUMBER_ALREADY_EXIST',
    refCode: 'USER.ERROR.REF_CODE_ALREADY_EXIST',
  };

  async create(createUserDto: Partial<UserDto>) {
    for (const key in this.uniqInput) {
      const obj = {};
      obj[key] = createUserDto[key];
      if (obj[key] !== undefined && (await this.userModel.exists(obj)) !== null)
        throw new HttpException(
          this.uniqInput[key],
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }

    const user = await this.userModel.create(createUserDto);
    if (!user)
      throw new HttpException(
        'USER.ERROR.USER_NOT_CREATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    else
      return {
        statusCode: HttpStatus.CREATED,
        message: 'User successfully created!',
        type: user.role,
      };
  }

  async findAll(query: FilterQuery<UserDocument>) {
    return {
      statusCode: HttpStatus.OK,
      users: await this.userModel.find(query),
    };
  }

  async findById(id: ParseIdPipe) {
    return {
      statusCode: HttpStatus.OK,
      user: await this.userModel.findById(id),
    };
  }

  async findOne(query: FilterQuery<User>) {
    return await this.userModel.findOne(query);
  }

  async update(id: ParseIdPipe, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, updateUserDto);
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'User successfully updated!',
    };
  }

  async subscribeTo(payload: SubscribeToDto) {
    const organisator = await this.userModel.findById(payload.organisatorID);
    const user = await this.userModel.findById(payload.userID);

    if (organisator && user) {
      return await this.subscribersService.subscribeTo({
        organisatorID: organisator,
        userID: user,
      });
    } else
      throw new HttpException(
        'SUBSCRIPTION.ERROR.SUBSCRIPTION_FAILED',
        HttpStatus.BAD_REQUEST,
      );
  }

  async remove(id: ParseIdPipe) {
    await this.userModel.findByIdAndDelete(id);
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'User successfully removed!',
    };
  }

  async IsEVENTMANAGER(id: ParseIdPipe) {
    const user = await this.userModel.findOne({
      _id: id,
      role: Roles.EVENTMANAGER,
    });
    if (!user) return false;
    return true;
  }

  async IsEVENTAGENT(id: ParseIdPipe) {
    const user = await this.userModel.findOne({
      _id: id,
      role: Roles.EVENTAGENT,
    });
    if (!user) return false;
    return true;
  }

  async IsCUSTOMER(id: ParseIdPipe) {
    const user = await this.userModel.findOne({
      _id: id,
      role: Roles.CUSTOMER,
    });
    if (!user) return false;
    return true;
  }

  async IsTICKETSELLER(id: ParseIdPipe) {
    const user = await this.userModel.findOne({
      _id: id,
      role: Roles.TICKETSELLER,
    });
    if (!user) return false;
    return true;
  }
}
