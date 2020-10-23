import { NotificationsEntity } from "./notifications.entity";

export class PaginatedNotificationsResult {
  data: NotificationsEntity[]
  page: number
  limit: number
  totalCount: number
}