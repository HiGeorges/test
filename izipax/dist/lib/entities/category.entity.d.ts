export interface ICategory {
    label: string;
    subCategoryOf: ICategory;
    createdAt: Date;
    updatedAt: Date;
}
export declare type CategoryDocument = ICategory & Document;
