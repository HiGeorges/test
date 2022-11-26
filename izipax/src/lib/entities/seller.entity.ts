import { IUser } from './user.entity';

export interface ISeller {
  organisatorId: IUser;
  sellerId: IUser;
  requestAt: Date;
  status: boolean;
}
export type SellerDocument = ISeller & Document;
