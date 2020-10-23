import { NotificationsEntity } from '../notifications/notifications.entity';
export declare class TransactionEntity {
    id: number;
    notificationText: string;
    amount: number;
    created: Date;
    updated: Date;
    deleted: string;
    notificationsEntity: NotificationsEntity;
    company_profile_id: number;
}
