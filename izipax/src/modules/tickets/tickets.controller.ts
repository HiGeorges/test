import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ROLESACCESS } from 'src/lib/decorators';
import { TicketCreateDto } from 'src/lib/dto/ticket.dto';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { TicketsService } from './tickets.service';

@Controller('api/tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  @ROLESACCESS(
    Roles.ADMIN,
    Roles.EVENTMANAGER,
    Roles.TICKETSELLER,
    Roles.CUSTOMER,
  )
  @Post()
  create(@Body() createTicketDto: TicketCreateDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get()
  @ROLESACCESS(Roles.ADMIN)
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  @ROLESACCESS(Roles.ADMIN)
  findOne(@Param('id') id: ParseIdPipe) {
    return this.ticketsService.findOne(id);
  }

  @Delete(':id')
  @ROLESACCESS(Roles.ADMIN)
  remove(@Param('id') id: ParseIdPipe) {
    return this.ticketsService.remove(id);
  }
}
