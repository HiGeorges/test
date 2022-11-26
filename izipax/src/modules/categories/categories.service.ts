import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/lib/dto';
import { CategoryDocument } from 'src/lib/entities';
import { ParseIdPipe } from 'src/lib/pipes';
import { Category } from 'src/lib/schemas';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const exist = await this.categoryModel.exists({
      label: createCategoryDto.label,
    });
    if (!exist) {
      const category = await this.categoryModel.create(createCategoryDto);
      if (!category)
        throw new HttpException(
          'CATEGORY.ERROR.CATEGORY_NOT_CREATED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      else
        return {
          statusCode: HttpStatus.CREATED,
          message: 'Category successfully created!',
        };
    } else
      throw new HttpException(
        'CATEGORY.ERROR.CATEGORY_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  async findAll() {
    return await this.categoryModel.find();
  }

  async findOne(query: FilterQuery<Category>) {
    return await this.categoryModel.findOne(query);
  }

  async update(id: ParseIdPipe, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryModel.findById(id);
    if (!category)
      throw new HttpException(
        'CATEGORY.ERROR.CATEGORY_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    else {
      const exist = await this.categoryModel.exists({
        label: updateCategoryDto.label,
      });
      if (!exist) {
        return {
          statusCode: HttpStatus.ACCEPTED,
          message: 'Category successfully updated!',
        };
      } else
        throw new HttpException(
          'CATEGORY.ERROR.CATEGORY_ALREADY_EXIST',
          HttpStatus.BAD_REQUEST,
        );
    }
  }

  async remove(id: ParseIdPipe) {
    const category = await this.categoryModel.findByIdAndDelete(id);
    if (!category)
      throw new HttpException(
        'CATEGORY.ERROR.CATEGORY_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'Category successfully deleted!',
    };
  }
}
