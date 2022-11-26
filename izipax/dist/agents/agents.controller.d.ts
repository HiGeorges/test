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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AgentCreateDto, AgentUpdateDto } from 'src/lib/dto/agent.dto';
import { ParseIdPipe } from 'src/lib/pipes';
import { AgentsService } from './agents.service';
export declare class AgentsController {
    private readonly agentsService;
    constructor(agentsService: AgentsService);
    create(createAgentDto: AgentCreateDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, import("../lib/entities").AgentDocument> & import("../lib/entities").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, import("../lib/entities").AgentDocument> & import("../lib/entities").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").AgentDocument>;
    findOne(id: ParseIdPipe): import("mongoose").Query<import("mongoose").Document<unknown, any, import("../lib/entities").AgentDocument> & import("../lib/entities").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("../lib/entities").AgentDocument> & import("../lib/entities").IAgent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").AgentDocument>;
    update(id: ParseIdPipe, updateAgentDto: AgentUpdateDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: ParseIdPipe): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
