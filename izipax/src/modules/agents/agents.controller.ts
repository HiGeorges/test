import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ROLESACCESS } from 'src/lib/decorators';
import { AgentCreateDto, AgentUpdateDto } from 'src/lib/dto/agent.dto';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { AgentsService } from './agents.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Post()
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  create(@Body() createAgentDto: AgentCreateDto) {
    return this.agentsService.create(createAgentDto);
  }

  @Get()
  @ROLESACCESS(Roles.ADMIN)
  findAll() {
    return this.agentsService.findAll();
  }

  @Get(':id')
  @ROLESACCESS(Roles.ADMIN)
  findOne(@Param('id') id: ParseIdPipe) {
    return this.agentsService.findOne(id);
  }

  @Patch(':id')
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  update(@Param('id') id: ParseIdPipe, @Body() updateAgentDto: AgentUpdateDto) {
    return this.agentsService.update(id, updateAgentDto);
  }

  @ROLESACCESS(Roles.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: ParseIdPipe) {
    return this.agentsService.remove(id);
  }
}
