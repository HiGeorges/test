import { Module } from '@nestjs/common';
import { TicketTypesService } from './ticketTypes.service';
import { TicketTypesController } from './ticketTypes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TicketType,
  TicketTypeSchema,
} from 'src/lib/schemas/ticketType.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TicketType.name, schema: TicketTypeSchema },
    ]),
  ],
  controllers: [TicketTypesController],
  providers: [TicketTypesService],
  exports: [TicketTypesService],
})
export class TicketTypesModule {}
