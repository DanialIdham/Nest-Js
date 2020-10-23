import {
  Entity,
  Column,
  ValueTransformer,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { TransactionEntity } from '../transaction/transaction.entity';

@Entity({ name: 'company_profile' })
export class CompanyProfileEntity {
  @IsNumber()
  @IsOptional()
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;

  @IsString()
  @Column({ length: 100 })
  name: string;

  @IsString()
  @Column({ type: 'longtext' })
  url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' })
  created: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
  })
  updated: Date;

  @Column({ type: 'timestamp', nullable: true, default: null })
  deleted: string;
 
  transactions: TransactionEntity[];

}
