import { TransactionEntity } from '../transaction/transaction.entity';
export declare class NotificationsEntity {
    id: number;
    notificationText: string;
    status: string;
    sent: number;
    count: number;
    url: string;
    created: Date;
    updated: Date;
    deleted: string;
    transactionEntity: TransactionEntity;
    transaction_id: number;
}
