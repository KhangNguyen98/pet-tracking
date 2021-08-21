import { OwnerModule } from './../owners/owner.module';
import { PetRepository } from './pet.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PetRepository]), OwnerModule],
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
