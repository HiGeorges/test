import { Strategy } from 'passport-jwt';
import { UserDocument } from 'src/lib/entities';
import { UsersService } from 'src/modules/users/users.service';
import { JWT_PAYLOAD } from '../types';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(data: Required<NonNullable<JWT_PAYLOAD>>): Promise<Partial<UserDocument>>;
}
export {};
