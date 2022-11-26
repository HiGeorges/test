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
import {
  TicketTypeCreateDto,
  TicketTypeUpdateDto,
} from 'src/lib/dto/ticketType.dto';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { TicketTypesService } from './ticketTypes.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/ticketTypes')
export class TicketTypesController {
  constructor(private readonly ticketTypesService: TicketTypesService) {}

  @Post()
  @ROLESACCESS(Roles.ADMIN || Roles.EVENTMANAGER)
  create(@Body() createTicketTypeDto: TicketTypeCreateDto) {
    return this.ticketTypesService.create(createTicketTypeDto);
  }

  @Get()
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  findAll() {
    return this.ticketTypesService.findAll();
  }

  @Get(':id')
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  findOne(@Param('id') id: ParseIdPipe) {
    return this.ticketTypesService.findOne(id);
  }

  @Patch(':id')
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  update(
    @Param('id') id: ParseIdPipe,
    @Body() updateTicketTypeDto: TicketTypeUpdateDto,
  ) {
    return this.ticketTypesService.update(id, updateTicketTypeDto);
  }

  @Delete(':id')
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  remove(@Param('id') id: ParseIdPipe) {
    return this.ticketTypesService.remove(id);
  }
}
