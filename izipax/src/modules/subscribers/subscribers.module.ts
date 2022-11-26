import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscriber, SubscriberSchema } from 'src/lib/schemas';
import { SubscribersService } from './subscribers.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subscriber.name, schema: SubscriberSchema },
    ]),
  ],
  providers: [SubscribersService],
  exports: [SubscribersService],
})
export class SubscribersModule {}
