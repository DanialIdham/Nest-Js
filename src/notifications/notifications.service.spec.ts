import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsService],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
  });

 
  describe('findAll', () => {
    it('should return an array of notifications', async () => {
      const result = ['test'];
      jest.spyOn(NotificationsService, 'getAllNotifications').mockImplementation(() => result);
      expect(await service.getAllNotifications().get()).toEqual('someArray');

    });
  });
});
