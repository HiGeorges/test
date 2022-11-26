import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ROLESACCESS } from 'src/lib/decorators';
import { EventCreateDto, EventUpdateDto } from 'src/lib/dto';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { EventVisibility, Roles } from 'src/lib/types';
import { TicketTypesService } from '../ticketTypes/ticketTypes.service';
import { EventsService } from './events.service';

@Controller('api/events')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly ticketTypesService: TicketTypesService,
    private readonly ticketService: TicketTypesService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Post()
  create(@Body() createEventDto: EventCreateDto) {
    return this.eventsService.create(createEventDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ParseIdPipe) {
    return this.eventsService.find({
      _id: id,
      visibility: EventVisibility.PUBLIC,
    });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Patch(':id')
  update(@Param('id') id: ParseIdPipe, @Body() updateEventDto: EventUpdateDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Delete(':id')
  archived(@Param('id') id: ParseIdPipe) {
    return this.eventsService.archived(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Get('me/ticketTypes')
  getOrganisatorVouchers(@Request() req) {
    return this.ticketTypesService.find({ eventId: req.event._id });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Get('me/tickets')
  getOrganisatorTickets(@Request() req) {
    return this.ticketService.find({ eventId: req.event._id });
  }
}
