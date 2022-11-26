import { IEvent } from './event.entity';
export interface IVoucher {
    label: string;
    code: string;
    reducAmount: number;
    eventId: IEvent;
    createdAt: Date;
    updatedAt: Date;
    times: number;
}
export declare type VoucherDocument = IVoucher & Document;
