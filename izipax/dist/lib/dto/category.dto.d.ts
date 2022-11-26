import { ICategory } from '../entities';
export declare class CategoryDto implements ICategory {
    label: string;
    subCategoryOf: ICategory;
    createdAt: Date;
    updatedAt: Date;
}
declare const CreateCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<Pick<CategoryDto, "label" | "subCategoryOf">>>;
export declare class CreateCategoryDto extends CreateCategoryDto_base {
}
export declare class UpdateCategoryDto extends CreateCategoryDto {
}
export {};
