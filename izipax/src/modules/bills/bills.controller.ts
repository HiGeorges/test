import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ROLESACCESS } from 'src/lib/decorators';
import { BillCreateDto, BillUpdateDto } from 'src/lib/dto/bill.dto';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { BillsService } from './bills.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @ROLESACCESS(Roles.ADMIN)
  @Post()
  create(@Body() createBillDto: BillCreateDto) {
    return this.billsService.create(createBillDto);
  }

  @ROLESACCESS(Roles.ADMIN)
  @Get()
  findAll() {
    return this.billsService.findAll();
  }

  @ROLESACCESS(Roles.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: ParseIdPipe) {
    return this.billsService.findOne(id);
  }

  @ROLESACCESS(Roles.ADMIN)
  @Patch(':id')
  update(@Param('id') id: ParseIdPipe, @Body() updateBillDto: BillUpdateDto) {
    return this.billsService.update(id, updateBillDto);
  }
}
