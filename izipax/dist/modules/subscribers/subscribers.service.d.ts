import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { SubscribeToDto } from 'src/lib/dto';
import { SubscriberDocument } from 'src/lib/entities';
import { ParseIdPipe } from 'src/lib/pipes';
export declare class SubscribersService {
    private subscriberModel;
    constructor(subscriberModel: Model<SubscriberDocument>);
    subscribeTo(subscribeTo: SubscribeToDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    getOrganisatorSubscription(organisatorID: ParseIdPipe): Promise<{
        count: number;
        subscriptions?: undefined;
    } | {
        count: number;
        subscriptions: (import("mongoose").Document<unknown, any, SubscriberDocument> & import("src/lib/entities").ISubscriber & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    unSubscribeTo(unSubscribeTo: SubscribeToDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
