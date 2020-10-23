import { TransactionService } from './transaction.service';
import { TransactionEntity } from './transaction.entity';
import { NotificationsService } from '../notifications/notifications.service';
import { CompanyProfileService } from '../company-profile/company-profile.service';
export declare class TransactionController {
    private readonly transactionService;
    private readonly notificationsService;
    private readonly companyProfileService;
    constructor(transactionService: TransactionService, notificationsService: NotificationsService, companyProfileService: CompanyProfileService);
    getAll(): Promise<TransactionEntity[]>;
    create(transactionEntity: TransactionEntity): Promise<{
        statusCode: number;
        data: TransactionEntity;
    }>;
}
