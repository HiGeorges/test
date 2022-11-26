/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/lib/dto';
import { CategoryDocument } from 'src/lib/entities';
import { ParseIdPipe } from 'src/lib/pipes';
import { Category } from 'src/lib/schemas';
export declare class CategoriesService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, CategoryDocument> & import("src/lib/entities").ICategory & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(query: FilterQuery<Category>): Promise<import("mongoose").Document<unknown, any, CategoryDocument> & import("src/lib/entities").ICategory & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: ParseIdPipe, updateCategoryDto: UpdateCategoryDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: ParseIdPipe): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
