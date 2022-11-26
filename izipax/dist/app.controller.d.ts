import { AppService } from './app.service';
import { PaymentsService } from './modules/payments/payments.service';
export declare class AppController {
    private readonly appService;
    private readonly paymentService;
    constructor(appService: AppService, paymentService: PaymentsService);
    root(): {
        [key: string]: string | number;
    };
}
