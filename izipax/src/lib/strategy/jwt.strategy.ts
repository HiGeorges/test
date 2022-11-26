import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDocument } from 'src/lib/entities';
import { UsersService } from 'src/modules/users/users.service';
import { JWT_PAYLOAD, UserSTATUS } from '../types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(
    data: Required<NonNullable<JWT_PAYLOAD>>,
  ): Promise<Partial<UserDocument>> {
    const user = await this.usersService.findOne({
      _id: data._id,
      status: { $nin: [UserSTATUS.DISABLED, UserSTATUS.SUSPENDED] },
      role: data.role,
    });
    if (!user)
      throw new UnauthorizedException('AUTH_GUARD.ERROR.JWT_INVALID_TOKEN');
    return data;
  }
}
