import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './modules/categories/categories.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { EventsModule } from './modules/events/events.module';
import { TicketTypesModule } from './modules/ticketTypes/ticketTypes.module';
import { EventTypeModule } from './modules/eventType/eventType.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { SellersModule } from './modules/sellers/sellers.module';
import { AgentsModule } from './modules/agents/agents.module';
import { BillsModule } from './modules/bills/bills.module';
import { VouchersModule } from './modules/vouchers/vouchers.module';
import { SubscribersModule } from './modules/subscribers/subscribers.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [
    UsersModule,
    CacheModule.register({
      ttl: 5,
      max: 100,
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
        auth: {
          username: process.env.MONGODB_USER,
          password: process.env.MONGODB_PASS,
        },
      }),
    }),
    AuthModule,
    CategoriesModule,
    TransactionsModule,
    EventsModule,
    EventTypeModule,
    TicketTypesModule,
    TicketsModule,
    SellersModule,
    AgentsModule,
    BillsModule,
    VouchersModule,
    SubscribersModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
