/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { AgentCreateDto, AgentUpdateDto } from 'src/lib/dto/agent.dto';
import { AgentDocument } from 'src/lib/entities/agent.entity';
import { ParseIdPipe } from 'src/lib/pipes';
export declare class AgentsService {
    private agentModel;
    constructor(agentModel: Model<AgentDocument>);
    create(payload: Required<NonNullable<AgentCreateDto>>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, AgentDocument> & import("src/lib/entities/agent.entity").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, AgentDocument> & import("src/lib/entities/agent.entity").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AgentDocument>;
    find(query: FilterQuery<AgentDocument>): Promise<(import("mongoose").Document<unknown, any, AgentDocument> & import("src/lib/entities/agent.entity").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: ParseIdPipe): import("mongoose").Query<import("mongoose").Document<unknown, any, AgentDocument> & import("src/lib/entities/agent.entity").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, AgentDocument> & import("src/lib/entities/agent.entity").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AgentDocument>;
    update(id: ParseIdPipe, updateAgentDto: AgentUpdateDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: ParseIdPipe): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
