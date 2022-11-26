import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BillCreateDto, BillUpdateDto } from 'src/lib/dto/bill.dto';
import { BillDocument } from 'src/lib/entities/bill.entity';
import { ParseIdPipe } from 'src/lib/pipes';
import { Bill } from 'src/lib/schemas/bill.schema';

@Injectable()
export class BillsService {
  constructor(
    @InjectModel(Bill.name)
    private billModel: Model<BillDocument>,
  ) {}

  async create(payload: Required<NonNullable<BillCreateDto>>) {
    const bill = await this.billModel.create({
      ...payload,
    });
    if (!bill)
      throw new HttpException(
        'BILL.ERROR.BILL_NOT_CREATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.CREATED,
      message: 'BILL.SUCCESS.BILL_CREATED',
    };
  }

  async findAll() {
    const bill = await this.billModel.find();
    if (!bill)
      throw new HttpException(
        'BILL.ERROR.BILL_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return bill;
  }

  async findOne(id: ParseIdPipe) {
    const bill = await this.billModel.findById(id);
    if (!bill)
      throw new HttpException(
        'BILL.ERROR.BILL_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return bill;
  }

  async update(id: ParseIdPipe, updateBillDto: BillUpdateDto) {
    const bill = await this.billModel.findByIdAndUpdate(id, updateBillDto);
    if (!bill)
      throw new HttpException(
        'BILL.ERROR.BILL_NOT_UPDATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'BILL.SUCCESS.BILL_UPDATED',
    };
  }

  async remove(id: ParseIdPipe) {
    const bill = await this.billModel.findByIdAndDelete(id);
    if (!bill)
      throw new HttpException(
        'BILL.ERROR.BILL_NOT_DELETED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'BILL.SUCCESS.BILL_DELETED',
    };
  }
}
