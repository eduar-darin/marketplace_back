import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum Role {
  Client = 'client',
  ADMIN = 'admin',
  SELLER = 'seller',
}

@Entity('clients')
export class RegisterClient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Client,
  })
  role: Role;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
