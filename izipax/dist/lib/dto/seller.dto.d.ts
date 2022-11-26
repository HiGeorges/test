import { ISeller, IUser } from '../entities';
export declare class SellerDto implements ISeller {
    organisatorId: IUser;
    sellerId: IUser;
    requestAt: Date;
    status: boolean;
}
declare const SellerCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<SellerDto, "status" | "requestAt">>;
export declare class SellerCreateDto extends SellerCreateDto_base {
}
declare const SellerUpdateDto_base: import("@nestjs/mapped-types").MappedType<Omit<SellerDto, "requestAt">>;
export declare class SellerUpdateDto extends SellerUpdateDto_base {
}
export {};
