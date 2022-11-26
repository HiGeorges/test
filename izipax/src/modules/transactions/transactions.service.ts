import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionCreateDto } from 'src/lib/dto/transaction.dto';
import { TransactionDocument } from 'src/lib/entities/transaction.entity';
import { Transaction } from 'src/lib/schemas';
import { TransactionMETHODS, TransactionTYPES } from 'src/lib/types';
import { PaymentsService } from '../payments/payments.service';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
    private readonly paymentService: PaymentsService,
  ) {}

  async create(payload: Required<NonNullable<TransactionCreateDto>>) {
    console.log(payload);
    if (
      payload.paymentMethod === TransactionMETHODS.MTNBJ &&
      payload.type === TransactionTYPES.PAYMENT
    ) {
      const transref = new Date().getTime().toString();
      const payment = this.paymentService.payment_mtnbj({
        ...payload,
        transref,
      });
      console.log({ payment });
      // const transaction = await this.transactionModel.create({
      //   ...payload,
      //   transref,
      // });
      // if (!transaction)
      //   throw new HttpException(
      //     'TRANSACTION.ERROR.TRANSACTION_NOT_CREATED',
      //     HttpStatus.INTERNAL_SERVER_ERROR,
      //   );
      return {
        statusCode: HttpStatus.CREATED,
        message: 'TRANSACTION.SUCCESS.TRANSACTION_CREATED',
      };
    }
    throw new HttpException(
      'TRANSACTION.ERROR.TRANSACTION_METHOD_NOT_ALLOWED',
      HttpStatus.METHOD_NOT_ALLOWED,
    );
  }
}
