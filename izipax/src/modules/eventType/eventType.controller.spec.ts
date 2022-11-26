import { Test, TestingModule } from '@nestjs/testing';
import { EventTypeController } from './eventType.controller';
import { EventTypeService } from './eventType.service';

describe('EventTypeController', () => {
  let controller: EventTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventTypeController],
      providers: [EventTypeService],
    }).compile();

    controller = module.get<EventTypeController>(EventTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
