import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { AgentCreateDto, AgentUpdateDto } from 'src/lib/dto/agent.dto';
import { AgentDocument } from 'src/lib/entities/agent.entity';
import { ParseIdPipe } from 'src/lib/pipes';
import { Agent } from 'src/lib/schemas/agent.schema';

@Injectable()
export class AgentsService {
  constructor(
    @InjectModel(Agent.name)
    private agentModel: Model<AgentDocument>,
  ) {}

  async create(payload: Required<NonNullable<AgentCreateDto>>) {
    const agent = await this.agentModel.create({
      ...payload,
    });
    if (!agent)
      throw new HttpException(
        'AGENT.ERROR.AGENT_NOT_CREATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.CREATED,
      message: 'AGENT.SUCCESS.AGENT_CREATED',
    };
  }

  findAll() {
    const agent = this.agentModel.find();
    if (!agent)
      throw new HttpException(
        'AGENT.ERROR.AGENT_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return agent;
  }

  async find(query: FilterQuery<AgentDocument>) {
    return await this.agentModel.find(query);
  }

  findOne(id: ParseIdPipe) {
    const agent = this.agentModel.findById(id);
    if (!agent)
      throw new HttpException(
        'AGENT.ERROR.AGENT_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return agent;
  }

  async update(id: ParseIdPipe, updateAgentDto: AgentUpdateDto) {
    const agent = await this.agentModel.findByIdAndUpdate(id, updateAgentDto);
    if (!agent)
      throw new HttpException(
        'AGENT.ERROR.AGENT_NOT_UPDATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'AGENT.SUCCESS.AGENT_UPDATED',
    };
  }

  async remove(id: ParseIdPipe) {
    const agent = await this.agentModel.findByIdAndDelete(id);
    if (!agent)
      throw new HttpException(
        'AGENT.ERROR.AGENT_NOT_DELETED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'AGENT.SUCCESS.AGENT_DELETED',
    };
  }
}
