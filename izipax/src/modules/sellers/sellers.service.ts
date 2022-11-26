import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { SellerCreateDto, SellerUpdateDto } from 'src/lib/dto/seller.dto';
import { SellerDocument } from 'src/lib/entities/seller.entity';
import { ParseIdPipe } from 'src/lib/pipes';
import { Seller } from 'src/lib/schemas/seller.schema';

@Injectable()
export class SellersService {
  constructor(
    @InjectModel(Seller.name)
    private sellerModel: Model<SellerDocument>,
  ) {}
  async create(payload: Required<NonNullable<SellerCreateDto>>) {
    const seller = await this.sellerModel.create({
      ...payload,
    });
    if (!seller)
      throw new HttpException(
        'SELLER.ERROR.SELLER_NOT_CREATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.CREATED,
      message: 'SELLER.SUCCESS.SELLER_CREATED',
    };
  }

  async findAll() {
    const seller = await this.sellerModel.find();
    if (!seller)
      throw new HttpException(
        'SELLER.ERROR.SELLER_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return seller;
  }
  async find(query: FilterQuery<SellerDocument>) {
    return await this.sellerModel.find(query);
  }

  async findOne(id: ParseIdPipe) {
    const seller = await this.sellerModel.findById(id);
    if (!seller)
      throw new HttpException(
        'SELLER.ERROR.SELLER_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return seller;
  }

  async update(id: ParseIdPipe, updateSellerDto: SellerUpdateDto) {
    const seller = await this.sellerModel.findByIdAndUpdate(
      id,
      updateSellerDto,
    );
    if (!seller)
      throw new HttpException(
        'SELLER.ERROR.SELLER_NOT_UPDATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'SELLER.SUCCESS.SELLER_UPDATED',
    };
  }

  async remove(id: ParseIdPipe) {
    const seller = await this.sellerModel.findByIdAndDelete(id);
    if (!seller)
      throw new HttpException(
        'SELLER.ERROR.SELLER_NOT_DELETED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'SELLER.SUCCESS.SELLER_DELETED',
    };
  }
}
