import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EventCreateDto, EventUpdateDto } from 'src/lib/dto';
import { EventDocument } from 'src/lib/entities/event.entity';
import { ParseIdPipe } from 'src/lib/pipes';
import { Event } from 'src/lib/schemas';
import { EventVisibility } from 'src/lib/types';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name)
    private EventModel: Model<EventDocument>,
  ) {}

  async create(payload: Required<NonNullable<EventCreateDto>>) {
    const exist = await this.EventModel.exists({
      name: payload.name,
    });
    if (!exist) {
      const event = await this.EventModel.create(payload);
      if (!event)
        throw new HttpException(
          'EVENT.ERROR.EVENT_NOT_CREATED',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      return {
        statusCode: HttpStatus.CREATED,
        message: 'EVENT.SUCCESS.EVENT_CREATED',
      };
    } else
      throw new HttpException(
        'EVENT.ERROR.EVENT_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  async findAll() {
    const event = await this.EventModel.find();
    if (!event)
      throw new HttpException(
        'EVENT.ERROR.EVENT_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return event;
  }

  async find(query: FilterQuery<EventDocument>) {
    return await this.EventModel.find(query);
  }

  async findOne(id: ParseIdPipe) {
    const event = await this.EventModel.findById(id);
    if (!event)
      throw new HttpException(
        'EVENT.ERROR.EVENT_NOT_FOUND',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return event;
  }

  async update(id: ParseIdPipe, updateEventDto: EventUpdateDto) {
    const exist = await this.EventModel.find({ name: updateEventDto.name })
      .where('name')
      .ne(updateEventDto.name)
      .count()
      .exec();

    if (!exist) {
      const event = await this.EventModel.findOneAndUpdate(id, updateEventDto);
      if (!event)
        throw new HttpException(
          'EVENT.ERROR.EVENT_NOT_FOUND',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      return event;
    } else
      throw new HttpException(
        'EVENT.ERROR.EVENT_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
  }

  async archived(id: ParseIdPipe) {
    const event = await this.EventModel.findById(id);
    if (!event)
      throw new HttpException(
        'EVENT.ERROR.EVENT_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    else {
      event.visibility = EventVisibility.ARCHIVED;
      await event.save();
    }
  }
}
