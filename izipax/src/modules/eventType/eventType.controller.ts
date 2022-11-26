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
  EventTypeCreateDto,
  EventTypeUpdateDto,
} from 'src/lib/dto/eventType.dto';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { EventTypeService } from './eventType.service';

@Controller('api/eventType')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Post()
  create(@Body() createEventTypeDto: EventTypeCreateDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: ParseIdPipe) {
    return this.eventTypeService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Patch(':id')
  update(
    @Param('id') id: ParseIdPipe,
    @Body() updateEventTypeDto: EventTypeUpdateDto,
  ) {
    return this.eventTypeService.update(id, updateEventTypeDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: ParseIdPipe) {
    return this.eventTypeService.remove(id);
  }
}
