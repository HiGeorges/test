import { IUser } from './user.entity';
export interface ISubscriber {
    organisatorID: IUser;
    userID: IUser;
    subscribedAt: Date;
}
export declare type SubscriberDocument = ISubscriber & Document;
