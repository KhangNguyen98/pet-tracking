<<<<<<< HEAD
import { OwnerModule } from './../owners/owner.module';
=======
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
import { PetRepository } from './pet.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([PetRepository]), OwnerModule],
=======
  imports: [TypeOrmModule.forFeature([PetRepository])],
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
