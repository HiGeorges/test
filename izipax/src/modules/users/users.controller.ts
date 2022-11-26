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
import { FilterQuery } from 'mongoose';
import { ROLESACCESS } from 'src/lib/decorators';
import { CreateUserDto, UpdateUserDto } from 'src/lib/dto';
import { UserDocument } from 'src/lib/entities';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { AgentsService } from '../agents/agents.service';
import { EventsService } from '../events/events.service';
import { SellersService } from '../sellers/sellers.service';
import { VouchersService } from '../vouchers/vouchers.service';
import { UsersService } from './users.service';

@Controller('/api/users')
@UseGuards(RolesGuard, JwtAuthGuard)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private eventsService: EventsService,
    private readonly vouchersService: VouchersService,
    private readonly sellersService: SellersService,
    private readonly agentsService: AgentsService,
  ) {}

  @ROLESACCESS(Roles.ADMIN)
  @Post()
  create(@Body() createUserDto: Required<CreateUserDto>) {
    return this.usersService.create(createUserDto);
  }

  @ROLESACCESS(Roles.ADMIN)
  @Post()
  findAll(@Body() query: FilterQuery<UserDocument>) {
    return this.usersService.findAll(query);
  }

  @ROLESACCESS(Roles.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: ParseIdPipe) {
    return this.usersService.findById(id);
  }

  @ROLESACCESS(Roles.ADMIN)
  @Patch(':id')
  update(
    @Param('id') id: ParseIdPipe,
    @Body() updateUserDto: Required<UpdateUserDto>,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @ROLESACCESS(Roles.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: ParseIdPipe) {
    return this.usersService.remove(id);
  }

  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Get('me/events')
  getOrganisatorEvents(@Request() req) {
    return this.eventsService.find({ createdBy: req.user._id });
  }

  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Get('me/vouchers')
  getOrganisatorVouchers(@Request() req) {
    return this.vouchersService.find({ createdBy: req.user._id });
  }

  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Get('me/sellers')
  getSeller(@Request() req) {
    return this.sellersService.find({ sellerId: req.user._id });
  }

  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  @Get('me/agents')
  getAgents(@Request() req) {
    return this.agentsService.find({ organisatorId: req.user.organisationID });
  }

  @Post('me/subscribeTo')
  subscribeTo(@Request() req, @Body() organisatorID) {
    return this.usersService.subscribeTo({
      userID: req.user._id,
      organisatorID,
    });
  }
}
