export interface ILogin {
    email: string;
    token: number;
    timestamp: Date;
}
export declare type LoginDocument = ILogin & Document;
