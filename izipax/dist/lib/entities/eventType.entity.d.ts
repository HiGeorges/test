export interface IEventType {
    label: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare type EventTypeDocument = IEventType & Document;
