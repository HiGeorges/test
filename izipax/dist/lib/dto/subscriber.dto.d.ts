import { ISubscriber, IUser } from '../entities';
export declare class SubscriberDto implements ISubscriber {
    organisatorID: IUser;
    userID: IUser;
    subscribedAt: Date;
}
declare const SubscribeToDto_base: import("@nestjs/mapped-types").MappedType<Omit<SubscriberDto, "subscribedAt">>;
export declare class SubscribeToDto extends SubscribeToDto_base {
}
export {};
