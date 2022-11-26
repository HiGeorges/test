import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { TicketCreateDto } from 'src/lib/dto/ticket.dto';
import { TicketDocument } from 'src/lib/entities/ticket.entity';
import { ParseIdPipe } from 'src/lib/pipes';
import { Ticket } from 'src/lib/schemas/ticket.schema';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name)
    private ticketModel: Model<TicketDocument>,
  ) {}

  async create(payload: Required<NonNullable<TicketCreateDto>>) {
    const ticket = await this.ticketModel.create({
      ...payload,
    });
    if (!ticket)
      throw new HttpException(
        'TICKET.ERROR.TICKET_NOT_CREATED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.CREATED,
      message: 'TICKET.SUCCESS.TICKET_CREATED',
    };
  }

  async findAll() {
    const ticket = await this.ticketModel.find();
    if (!ticket)
      throw new HttpException(
        'TICKET.ERROR.TICKET_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return ticket;
  }

  async find(query: FilterQuery<TicketDocument>) {
    return await this.ticketModel.find(query);
  }

  async findOne(id: ParseIdPipe) {
    const ticket = await this.ticketModel.findById(id);
    if (!ticket)
      throw new HttpException(
        'TICKET.ERROR.TICKET_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return ticket;
  }

  async remove(id: ParseIdPipe) {
    const ticket = await this.ticketModel.findByIdAndDelete(id);
    if (!ticket)
      throw new HttpException(
        'TICKET.ERROR.TICKET_NOT_DELETED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'TICKET.SUCCESS.TICKET_DELETED',
    };
  }
}
