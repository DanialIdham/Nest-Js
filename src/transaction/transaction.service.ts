import { Injectable } from '@nestjs/common';
import { TransactionEntity } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
  ) {}
  async getAllTransaction(): Promise<TransactionEntity[]> {
    return await this.transactionRepository.find({
    });
  }
  async createTransactionEntity(transactionEntity: TransactionEntity) {
    const data = await this.transactionRepository.save(transactionEntity);
    return data
  }
}
