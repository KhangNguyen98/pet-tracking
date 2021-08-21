<<<<<<< HEAD
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
=======
import { PetHealthStatus } from './pet-health-status.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: PetHealthStatus;
}
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
