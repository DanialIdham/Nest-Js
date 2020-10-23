import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsNumber, IsOptional } from 'class-validator';

@Entity({name:"users"})
export class UsersEntity {
  @IsNumber() @IsOptional() @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;

  @IsString() @Column({ length: 20 })
  name: string;

  @IsString() @Column({ type: 'longtext' })
  username: string;

  @IsString() @Column({ type: 'longtext' })
  password: string;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  created: Date;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
  })
  updated: Date;

  @Column({ type: 'timestamp', nullable: true, default: null})
  deleted: string;
}
