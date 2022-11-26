import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  EventTypeCreateDto,
  EventTypeUpdateDto,
} from 'src/lib/dto/eventType.dto';
import { EventTypeDocument } from 'src/lib/entities/eventType.entity';
import { ParseIdPipe } from 'src/lib/pipes';
import { EventType } from 'src/lib/schemas/eventType.schema';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType.name)
    private eventTypeModel: Model<EventTypeDocument>,
  ) {}

  async create(payload: Required<NonNullable<EventTypeCreateDto>>) {
    const exist = await this.eventTypeModel.exists({
      label: payload.label,
    });
    if (!exist) {
      const eventType = await this.eventTypeModel.create(payload);
      if (!eventType)
        throw new HttpException(
          'EVENT_TYPE.ERROR.EVENT_TYPE_NOT_CREATED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      else
        return {
          statusCode: HttpStatus.CREATED,
          message: 'EVENT_TYPE.SUCCESS.EVENT_TYPE_CREATED',
        };
    } else
      throw new HttpException(
        'EVENT_TYPE.ERROR.EVENT_TYPE_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  async findAll() {
    const eventType = await this.eventTypeModel.find();
    if (!eventType)
      throw new HttpException(
        'EVENT_TYPE.ERROR.EVENT_TYPE_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    return eventType;
  }

  async findOne(id: ParseIdPipe) {
    const eventType = await this.eventTypeModel.findById(id);
    if (!eventType)
      throw new HttpException(
        'EVENT_TYPE.ERROR.EVENT_TYPE_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    return eventType;
  }

  async update(id: ParseIdPipe, updateEventTypeDto: EventTypeUpdateDto) {
    const exist = await this.eventTypeModel.exists({
      label: updateEventTypeDto.label,
    });
    if (!exist) {
      const eventType = this.eventTypeModel.findOneAndUpdate(
        { _id: id },
        updateEventTypeDto,
      );
      if (!eventType)
        throw new HttpException(
          'EVENT_TYPE.ERROR.EVENT_TYPE_NOT_UPDATED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      else
        return {
          statusCode: HttpStatus.ACCEPTED,
          message: 'EVENT_TYPE.SUCCESS.EVENT_TYPE_UPDATED',
        };
    } else
      throw new HttpException(
        'EVENT_TYPE.ERROR.EVENT_TYPE_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  async remove(id: ParseIdPipe) {
    const eventType = await this.eventTypeModel.findOneAndDelete({ _id: id });
    const exists = await this.eventTypeModel.exists({ _id: id });
    if (!exists) {
      if (!eventType)
        throw new HttpException(
          'EVENT_TYPE.ERROR.EVENT_TYPE_NOT_DELETED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      else
        return {
          statusCode: HttpStatus.ACCEPTED,
          message: 'EVENT_TYPE.SUCCESS.EVENT_TYPE_DELETED',
        };
    } else {
      throw new HttpException(
        'EVENT_TYPE.ERROR.EVENT_TYPE_NOT_DELETED',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
