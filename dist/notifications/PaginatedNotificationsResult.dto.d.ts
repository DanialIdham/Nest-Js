import { NotificationsEntity } from "./notifications.entity";
export declare class PaginatedNotificationsResult {
    data: NotificationsEntity[];
    page: number;
    limit: number;
    totalCount: number;
}
