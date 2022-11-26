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
import { VoucherCreateDto, VoucherUpdateDto } from 'src/lib/dto/voucher.dto';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { VouchersService } from './vouchers.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  @Post()
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  create(@Body() createVoucherDto: VoucherCreateDto) {
    return this.vouchersService.create(createVoucherDto);
  }

  @Get()
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  findAll() {
    return this.vouchersService.findAll();
  }

  @Get(':id')
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  findOne(@Param('id') id: ParseIdPipe) {
    return this.vouchersService.findOne(id);
  }

  @Patch(':id')
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  update(
    @Param('id') id: ParseIdPipe,
    @Body() updateVoucherDto: VoucherUpdateDto,
  ) {
    return this.vouchersService.update(id, updateVoucherDto);
  }

  @Delete(':id')
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER)
  remove(@Param('id') id: ParseIdPipe) {
    return this.vouchersService.remove(id);
  }
}
