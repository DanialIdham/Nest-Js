import { Repository } from 'typeorm';
import { NotificationsEntity } from './notifications.entity';
export declare class NotificationsService {
    private notificationsRepository;
    constructor(notificationsRepository: Repository<NotificationsEntity>);
    getAllNotifications(): Promise<NotificationsEntity[]>;
    getAllFailedNotification(): Promise<NotificationsEntity[]>;
    createNotification(notificationEntity: NotificationsEntity): Promise<NotificationsEntity>;
    updateNotification(notificationEntity: NotificationsEntity): Promise<NotificationsEntity>;
    cronNotificationForEvery10Seconds(): Promise<NotificationsEntity[]>;
    cronNotificationForEvery20Seconds(): Promise<NotificationsEntity[]>;
    updateNotificationStatus(id: number, url: string): Promise<void>;
}
