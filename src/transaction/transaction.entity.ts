import {
  Entity,
  Column,
  ValueTransformer,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { NotificationsEntity } from '../notifications/notifications.entity';
import { CompanyProfileEntity } from '../company-profile/company-profile.entity';

@Entity({ name: 'transaction' })
export class TransactionEntity {
  @IsNumber()
  @IsOptional()
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @IsString()
  @Column({ length: 20 })
  notificationText: string;

  @IsNumber()
  @Column('decimal', { precision: 23, scale: 2, default: 0 })
  amount: number;

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

  @OneToOne(type => NotificationsEntity)
  @JoinColumn({name: 'notification_id'})
  notificationsEntity: NotificationsEntity;

  @Column({ type: 'bigint', nullable: true, default: null })
  company_profile_id: number;
}
