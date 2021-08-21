import { Owner } from './../owners/owner.entity';
import { PetHealthStatus } from './pet-health-status.enum';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: PetHealthStatus;

  @ManyToOne((type) => Owner, (owner) => owner.pets, { eager: false })
  owner: Owner;

  @Column()
  ownerID: number;
}
