import { Entity, Column, PrimaryGeneratedColumn,OneToOne, JoinColumn } from 'typeorm';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { TransactionEntity } from '../transaction/transaction.entity';

@Entity({name:"notifications"})
export class NotificationsEntity {
  @IsNumber() @IsOptional() @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @IsString() @Column({ type: 'longtext' })
  notificationText: string;

  @IsString() @Column({ type: 'longtext' })
  status: string;

  @IsNumber() @Column({ type: 'int'})
  sent: number;

  @IsNumber() @Column({ type: 'int'})
  count: number;

  @IsString() @Column({ type: 'longtext' })
  url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' })
  created: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
  })
  updated: Date;

  @Column({ type: 'timestamp', nullable: true, default: null})
  deleted: string;

  @OneToOne(type => TransactionEntity)
  @JoinColumn({name: 'transaction_id'})
  transactionEntity: TransactionEntity;

  @Column({ type: 'bigint', nullable: true, default: null })
  transaction_id : number;
}
