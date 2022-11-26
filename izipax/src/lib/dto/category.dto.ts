import { PartialType, PickType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { ICategory } from '../entities';

export class CategoryDto implements ICategory {
  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  @IsNotEmpty()
  subCategoryOf: ICategory;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}

export class CreateCategoryDto extends PartialType(
  PickType(CategoryDto, ['label', 'subCategoryOf'] as const),
) {}

export class UpdateCategoryDto extends CreateCategoryDto {}
