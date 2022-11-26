import { IAgent, IUser } from '../entities';
export declare class AgentDto implements IAgent {
    organisatorId: IUser;
    email: string;
    fullname: string;
    status: boolean;
    joinedAt: Date;
    updatedAt: Date;
}
declare const AgentCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<AgentDto, "updatedAt" | "status" | "joinedAt">>;
export declare class AgentCreateDto extends AgentCreateDto_base {
}
declare const AgentUpdateDto_base: import("@nestjs/mapped-types").MappedType<Omit<AgentDto, "updatedAt" | "joinedAt">>;
export declare class AgentUpdateDto extends AgentUpdateDto_base {
}
export {};
