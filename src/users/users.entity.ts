import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserStatus {
  ACTIVE = 'active',
  DISABLED = 'disable',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
  status: UserStatus;
}
