"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const agent_schema_1 = require("../../lib/schemas/agent.schema");
let AgentsService = class AgentsService {
    constructor(agentModel) {
        this.agentModel = agentModel;
    }
    async create(payload) {
        const agent = await this.agentModel.create(Object.assign({}, payload));
        if (!agent)
            throw new common_1.HttpException('AGENT.ERROR.AGENT_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.CREATED,
            message: 'AGENT.SUCCESS.AGENT_CREATED',
        };
    }
    findAll() {
        const agent = this.agentModel.find();
        if (!agent)
            throw new common_1.HttpException('AGENT.ERROR.AGENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return agent;
    }
    async find(query) {
        return await this.agentModel.find(query);
    }
    findOne(id) {
        const agent = this.agentModel.findById(id);
        if (!agent)
            throw new common_1.HttpException('AGENT.ERROR.AGENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return agent;
    }
    async update(id, updateAgentDto) {
        const agent = await this.agentModel.findByIdAndUpdate(id, updateAgentDto);
        if (!agent)
            throw new common_1.HttpException('AGENT.ERROR.AGENT_NOT_UPDATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'AGENT.SUCCESS.AGENT_UPDATED',
        };
    }
    async remove(id) {
        const agent = await this.agentModel.findByIdAndDelete(id);
        if (!agent)
            throw new common_1.HttpException('AGENT.ERROR.AGENT_NOT_DELETED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'AGENT.SUCCESS.AGENT_DELETED',
        };
    }
};
AgentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(agent_schema_1.Agent.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AgentsService);
exports.AgentsService = AgentsService;
//# sourceMappingURL=agents.service.js.map