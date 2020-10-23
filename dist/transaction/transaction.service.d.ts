import { TransactionEntity } from './transaction.entity';
import { Repository } from 'typeorm';
export declare class TransactionService {
    private transactionRepository;
    constructor(transactionRepository: Repository<TransactionEntity>);
    getAllTransaction(): Promise<TransactionEntity[]>;
    createTransactionEntity(transactionEntity: TransactionEntity): Promise<TransactionEntity>;
}
