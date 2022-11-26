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
import { SellerCreateDto, SellerUpdateDto } from 'src/lib/dto/seller.dto';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { SellersService } from './sellers.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Post()
  @ROLESACCESS(Roles.ADMIN, Roles.TICKETSELLER, Roles.EVENTMANAGER)
  create(@Body() createSellerDto: SellerCreateDto) {
    return this.sellersService.create(createSellerDto);
  }

  @Get()
  @ROLESACCESS(Roles.ADMIN)
  findAll() {
    return this.sellersService.findAll();
  }

  @Get(':id')
  @ROLESACCESS(Roles.ADMIN, Roles.EVENTMANAGER, Roles.TICKETSELLER)
  findOne(@Param('id') id: ParseIdPipe) {
    return this.sellersService.findOne(id);
  }

  @Patch(':id')
  @ROLESACCESS(Roles.ADMIN || Roles.TICKETSELLER)
  update(
    @Param('id') id: ParseIdPipe,
    @Body() updateSellerDto: SellerUpdateDto,
  ) {
    return this.sellersService.update(id, updateSellerDto);
  }

  @Delete(':id')
  @ROLESACCESS(Roles.ADMIN || Roles.TICKETSELLER)
  remove(@Param('id') id: ParseIdPipe) {
    return this.sellersService.remove(id);
  }
}
