import { IEvent } from './event.entity';

export interface ITicketType {
  eventId: IEvent;
  name: string;
  description: string;
  price: number;
  quantity: number;
  validFrom: Date;
  validTo: Date;
  createdAt: Date;
  updatedAt: Date;
}
export type TicketTypeDocument = ITicketType & Document;
