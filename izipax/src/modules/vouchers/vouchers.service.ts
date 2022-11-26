import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { VoucherCreateDto, VoucherUpdateDto } from 'src/lib/dto/voucher.dto';
import { VoucherDocument } from 'src/lib/entities/voucher.entity';
import { ParseIdPipe } from 'src/lib/pipes';
import { Voucher } from 'src/lib/schemas/voucher.schema';
import * as timeUuid from 'time-uuid';

@Injectable()
export class VouchersService {
  constructor(
    @InjectModel(Voucher.name)
    private voucherModel: Model<VoucherDocument>,
  ) {}

  async create(payload: Required<NonNullable<VoucherCreateDto>>) {
    const exist = await this.voucherModel.exists({
      label: payload.label,
    });
    if (!exist) {
      const voucher = await this.voucherModel.create({
        ...payload,
        code: timeUuid(),
      });
      if (!voucher)
        throw new HttpException(
          'VOUCHER.ERROR.VOUCHER_NOT_CREATED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      return {
        statusCode: HttpStatus.CREATED,
        message: 'VOUCHER.SUCCESS.VOUCHER_CREATED',
      };
    } else
      throw new HttpException(
        'VOUCHER.ERROR.VOUCHER_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  async findAll() {
    const voucher = await this.voucherModel.find();
    if (!voucher)
      throw new HttpException(
        'VOUCHER.ERROR.VOUCHER_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    return voucher;
  }

  async find(query: FilterQuery<VoucherDocument>) {
    return await this.voucherModel.find(query);
  }

  findOne(id: ParseIdPipe) {
    const voucher = this.voucherModel.findOne(id);
    if (!voucher)
      throw new HttpException(
        'VOUCHER.ERROR.VOUCHER_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    return voucher;
  }

  async update(id: ParseIdPipe, updateVoucherDto: VoucherUpdateDto) {
    const exist = await this.voucherModel.exists({
      label: updateVoucherDto.label,
    });
    if (!exist) {
      const voucher = this.voucherModel.findByIdAndUpdate(id, updateVoucherDto);
      if (!voucher)
        throw new HttpException(
          'VOUCHER.ERROR.VOUCHER_NOT_FOUND',
          HttpStatus.NOT_FOUND,
        );
      return voucher;
    } else
      throw new HttpException(
        'VOUCHER.ERROR.VOUCHER_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  remove(id: ParseIdPipe) {
    const voucher = this.voucherModel.findByIdAndDelete(id);
    if (!voucher)
      throw new HttpException(
        'VOUCHER.ERROR.VOUCHER_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    return voucher;
  }
}
