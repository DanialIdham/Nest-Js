import { TransactionEntity } from '../transaction/transaction.entity';
export declare class CompanyProfileEntity {
    id: bigint;
    name: string;
    url: string;
    created: Date;
    updated: Date;
    deleted: string;
    transactions: TransactionEntity[];
}
