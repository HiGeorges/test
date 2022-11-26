import { Module } from '@nestjs/common';
import { EventTypeService } from './eventType.service';
import { EventTypeController } from './eventType.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventType, EventTypeSchema } from 'src/lib/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EventType.name, schema: EventTypeSchema },
    ]),
  ],
  controllers: [EventTypeController],
  providers: [EventTypeService],
  exports: [EventTypeService],
})
export class EventTypeModule {}
