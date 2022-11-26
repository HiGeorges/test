import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubscribeToDto } from 'src/lib/dto';
import { SubscriberDocument } from 'src/lib/entities';
import { ParseIdPipe } from 'src/lib/pipes';
import { Subscriber } from 'src/lib/schemas';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectModel(Subscriber.name)
    private subscriberModel: Model<SubscriberDocument>,
  ) {}

  async subscribeTo(subscribeTo: SubscribeToDto) {
    const subscription = await this.subscriberModel.create({
      ...subscribeTo,
      subscribedAt: new Date(),
    });
    if (!subscription)
      throw new HttpException(
        'SUBSCRIPTION.ERROR.SUBSCRIPTION_FAILED',
        HttpStatus.BAD_REQUEST,
      );
    return {
      statusCode: HttpStatus.OK,
      message: 'Subscription was succesfull!',
    };
  }

  async getOrganisatorSubscription(organisatorID: ParseIdPipe) {
    const subscriptions = await this.subscriberModel.find({ organisatorID });
    if (!subscriptions) return { count: 0 };
    return { count: subscriptions.length, subscriptions };
  }

  async unSubscribeTo(unSubscribeTo: SubscribeToDto) {
    const subscription = await this.subscriberModel.remove({
      ...unSubscribeTo,
    });
    if (!subscription)
      throw new HttpException(
        'SUBSCRIPTION.ERROR.SUBSCRIPTION_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'Unsubscription was successfull!',
    };
  }
}
