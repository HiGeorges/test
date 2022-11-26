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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSellerDto = exports.CreateOrganisationDto = exports.CreateCustomerDto = exports.CreateEventAgentDto = exports.UpdateUserDto = exports.UserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const types_1 = require("../types");
class UserDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserDto.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "organisationID", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "organisationName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserDto.prototype, "balance", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "refCode", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(types_1.UserSTATUS),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(types_1.Roles),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ each: true }),
    __metadata("design:type", Array)
], UserDto.prototype, "areasOfInterest", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "websiteLink", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "facebookLink", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "twitterLink", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "tiktokLink", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "instagramLink", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UserDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UserDto.prototype, "createdAt", void 0);
exports.UserDto = UserDto;
class UpdateUserDto extends (0, mapped_types_1.OmitType)(UserDto, [
    'organisationID',
    'updatedAt',
    'createdAt',
    'role',
    'status',
    'balance',
]) {
}
exports.UpdateUserDto = UpdateUserDto;
class CreateEventAgentDto extends (0, mapped_types_1.OmitType)(UserDto, [
    'role',
    'city',
    'refCode',
    'address',
    'status',
    'birthdate',
    'avatar',
    'tiktokLink',
    'websiteLink',
    'twitterLink',
    'facebookLink',
    'instagramLink',
    'organisationID',
    'organisationName',
    'createdAt',
    'updatedAt',
]) {
}
exports.CreateEventAgentDto = CreateEventAgentDto;
class CreateCustomerDto extends (0, mapped_types_1.OmitType)(UserDto, [
    'role',
    'city',
    'refCode',
    'address',
    'status',
    'birthdate',
    'avatar',
    'tiktokLink',
    'websiteLink',
    'twitterLink',
    'facebookLink',
    'instagramLink',
    'organisationID',
    'organisationName',
    'createdAt',
    'updatedAt',
]) {
}
exports.CreateCustomerDto = CreateCustomerDto;
class CreateOrganisationDto extends (0, mapped_types_1.OmitType)(UserDto, [
    'role',
    'city',
    'refCode',
    'address',
    'status',
    'birthdate',
    'avatar',
    'tiktokLink',
    'websiteLink',
    'twitterLink',
    'facebookLink',
    'instagramLink',
    'organisationID',
    'areasOfInterest',
    'createdAt',
    'updatedAt',
]) {
}
exports.CreateOrganisationDto = CreateOrganisationDto;
class CreateSellerDto extends (0, mapped_types_1.OmitType)(UserDto, [
    'role',
    'city',
    'address',
    'status',
    'birthdate',
    'avatar',
    'tiktokLink',
    'websiteLink',
    'twitterLink',
    'facebookLink',
    'instagramLink',
    'organisationID',
    'organisationName',
    'createdAt',
    'updatedAt',
]) {
}
exports.CreateSellerDto = CreateSellerDto;
//# sourceMappingURL=user.dto.js.map