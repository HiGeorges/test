"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../../lib/schemas");
let CategoriesService = class CategoriesService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(createCategoryDto) {
        const exist = await this.categoryModel.exists({
            label: createCategoryDto.label,
        });
        if (!exist) {
            const category = await this.categoryModel.create(createCategoryDto);
            if (!category)
                throw new common_1.HttpException('CATEGORY.ERROR.CATEGORY_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            else
                return {
                    statusCode: common_1.HttpStatus.CREATED,
                    message: 'Category successfully created!',
                };
        }
        else
            throw new common_1.HttpException('CATEGORY.ERROR.CATEGORY_ALREADY_EXIST', common_1.HttpStatus.BAD_REQUEST);
    }
    async findAll() {
        return await this.categoryModel.find();
    }
    async findOne(query) {
        return await this.categoryModel.findOne(query);
    }
    async update(id, updateCategoryDto) {
        const category = await this.categoryModel.findById(id);
        if (!category)
            throw new common_1.HttpException('CATEGORY.ERROR.CATEGORY_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        else {
            const exist = await this.categoryModel.exists({
                label: updateCategoryDto.label,
            });
            if (!exist) {
                return {
                    statusCode: common_1.HttpStatus.ACCEPTED,
                    message: 'Category successfully updated!',
                };
            }
            else
                throw new common_1.HttpException('CATEGORY.ERROR.CATEGORY_ALREADY_EXIST', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        const category = await this.categoryModel.findByIdAndDelete(id);
        if (!category)
            throw new common_1.HttpException('CATEGORY.ERROR.CATEGORY_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'Category successfully deleted!',
        };
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map