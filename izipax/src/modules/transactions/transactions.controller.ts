import { Controller, Post, Body } from '@nestjs/common';
import { TransactionCreateDto } from 'src/lib/dto/transaction.dto';
// import { PaymentsService } from '../payments/payments.service';
import { TransactionsService } from './transactions.service';

@Controller('api/transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService, // private readonly paymentService: PaymentsService,
  ) {}

  @Post()
  create(@Body() createTransactionDto: TransactionCreateDto) {
    return this.transactionsService.create(createTransactionDto);
  }
  // @Post('mtn')
  // makepayment_mtn(@Body() payload: any) {
  //   return this.paymentService.create_payment_mtnbj(payload);
  // }
  // @Post('moov')
  // makepayment_moov(@Body() payload: any) {
  //   return this.paymentService.create_payment_moovbj(payload);
  // }
}
