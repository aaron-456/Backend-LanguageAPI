import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActivityLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: number;

  @Column()
  descripcion: number;

  @Column()
  category: string;

  @Column()
  status: string;
}
