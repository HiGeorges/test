import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { PaymentsService } from './modules/payments/payments.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly paymentService: PaymentsService,
  ) {}

  @Get()
  root(): { [key: string]: string | number } {
    return {
      status: HttpStatus.OK,
      message: 'API is working!',
      '👋🏾': 'Welcome to Vibin API',
      version: '1.0.0',
      '🤗': 'Talk is cheap. Show me the code. - Linus Torvalds',
    };
  }
}
