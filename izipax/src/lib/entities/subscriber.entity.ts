import { IUser } from './user.entity';

export interface ISubscriber {
  organisatorID: IUser;
  userID: IUser;

  subscribedAt: Date;
}

export type SubscriberDocument = ISubscriber & Document;
