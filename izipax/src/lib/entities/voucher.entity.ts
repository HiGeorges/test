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
export type VoucherDocument = IVoucher & Document;
