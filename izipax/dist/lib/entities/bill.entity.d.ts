import { IEvent } from './event.entity';
import { IUser } from './user.entity';
export interface IBill {
    organisatorId: IUser;
    eventId: IEvent;
    amountDue: number;
    sentAt: Date;
    description: string;
    paid: boolean;
    paidAt: Date;
    transactionId: string;
}
export declare type BillDocument = IBill & Document;
