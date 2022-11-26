import { IUser } from './user.entity';
export interface IAgent {
    organisatorId: IUser;
    email: string;
    fullname: string;
    status: boolean;
    joinedAt: Date;
    updatedAt: Date;
}
export declare type AgentDocument = IAgent & Document;
