import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
  TicketTypeCreateDto,
  TicketTypeUpdateDto,
} from 'src/lib/dto/ticketType.dto';
import { TicketTypeDocument } from 'src/lib/entities/ticketType.entity';
import { ParseIdPipe } from 'src/lib/pipes';
import { TicketType } from 'src/lib/schemas/ticketType.schema';

@Injectable()
export class TicketTypesService {
  constructor(
    @InjectModel(TicketType.name)
    private readonly ticketTypeModel: Model<TicketTypeDocument>,
  ) {}

  async create(payload: Required<NonNullable<TicketTypeCreateDto>>) {
    const exist = await this.ticketTypeModel.exists({
      name: payload.name,
    });
    if (!exist) {
      const ticketType = await this.ticketTypeModel.create({
        ...payload,
      });
      if (!ticketType)
        throw new HttpException(
          'TICKET_TYPE.ERROR.TICKET_TYPE_NOT_CREATED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      return {
        statusCode: HttpStatus.CREATED,
        message: 'TICKET_TYPE.SUCCESS.TICKET_TYPE_CREATED',
      };
    } else
      throw new HttpException(
        'TICKET_TYPE.ERROR.TICKET_TYPE_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  async findAll() {
    const ticketType = await this.ticketTypeModel.find();
    if (!ticketType)
      throw new HttpException(
        'TICKET_TYPE.ERROR.TICKET_TYPE_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return ticketType;
  }

  async find(query: FilterQuery<TicketTypeDocument>) {
    return await this.ticketTypeModel.find(query);
  }

  async findOne(id: ParseIdPipe) {
    const ticketType = await this.ticketTypeModel.findById(id);
    if (!ticketType)
      throw new HttpException(
        'TICKET_TYPE.ERROR.TICKET_TYPE_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return ticketType;
  }

  async update(id: ParseIdPipe, updateTicketTypeDto: TicketTypeUpdateDto) {
    const exist = await this.ticketTypeModel.exists({
      name: updateTicketTypeDto.name,
    });
    if (!exist) {
      const ticketType = await this.ticketTypeModel.findByIdAndUpdate(
        id,
        updateTicketTypeDto,
      );
      if (!ticketType)
        throw new HttpException(
          'TICKET_TYPE.ERROR.TICKET_TYPE_NOT_UPDATED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      return {
        statusCode: HttpStatus.OK,
        message: 'TICKET_TYPE.SUCCESS.TICKET_TYPE_UPDATED',
      };
    } else
      throw new HttpException(
        'TICKET_TYPE.ERROR.TICKET_TYPE_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  async remove(id: ParseIdPipe) {
    const ticketType = await this.ticketTypeModel.findByIdAndDelete(id);
    if (!ticketType)
      throw new HttpException(
        'TICKET_TYPE.ERROR.TICKET_TYPE_NOT_DELETED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return {
      statusCode: HttpStatus.OK,
      message: 'TICKET_TYPE.SUCCESS.TICKET_TYPE_DELETED',
    };
  }
}
