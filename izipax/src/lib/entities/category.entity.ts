export interface ICategory {
  label: string;
  subCategoryOf: ICategory;

  createdAt: Date;
  updatedAt: Date;
}

export type CategoryDocument = ICategory & Document;
