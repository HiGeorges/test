import { TicketTypesModule } from './../ticketTypes/ticketTypes.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/lib/schemas';
import { EventsModule } from '../events/events.module';
import { VouchersModule } from '../vouchers/vouchers.module';
import { SubscribersModule } from '../subscribers/subscribers.module';
import { SellersModule } from '../sellers/sellers.module';
import { AgentsModule } from '../agents/agents.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    EventsModule,
    VouchersModule,
    TicketTypesModule,
    SubscribersModule,
    SellersModule,
    AgentsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
