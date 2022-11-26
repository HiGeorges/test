export interface IEventType {
  label: string;

  createdAt: Date;
  updatedAt: Date;
}
export type EventTypeDocument = IEventType & Document;
