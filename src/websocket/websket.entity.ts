import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WebSoket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  message: string;
}