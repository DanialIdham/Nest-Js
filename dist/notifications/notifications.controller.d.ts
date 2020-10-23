import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    get(): Promise<import("./notifications.entity").NotificationsEntity[]>;
    getFailed(): Promise<import("./notifications.entity").NotificationsEntity[]>;
    sendNotification(): Promise<import("./notifications.entity").NotificationsEntity>;
    sendNotification2(): Promise<import("./notifications.entity").NotificationsEntity>;
}
