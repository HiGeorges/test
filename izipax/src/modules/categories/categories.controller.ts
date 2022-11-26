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
import { CreateCategoryDto, UpdateCategoryDto } from 'src/lib/dto';
import { JwtAuthGuard, RolesGuard } from 'src/lib/guards';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { CategoriesService } from './categories.service';

@Controller('/api/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: ParseIdPipe) {
    return this.categoriesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Patch(':id')
  update(
    @Param('id') id: ParseIdPipe,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ROLESACCESS(Roles.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: ParseIdPipe) {
    return this.categoriesService.remove(id);
  }
}
