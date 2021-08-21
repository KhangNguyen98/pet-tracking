<<<<<<< HEAD
import { Owner } from './../owners/owner.entity';
import { PetHealthStatus } from './pet-health-status.enum';
import { CreatePetDTO } from './dtos/create-pet.dto';
import { Pet } from './pet.entity';
import { PetRepository } from './pet.repository';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
=======
import { PetRepository } from './pet.repository';
import { Injectable } from '@nestjs/common';
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetRepository)
    private petRepository: PetRepository,
  ) {}
<<<<<<< HEAD
  async getPetById(id: number, owner: Owner): Promise<Pet> {
    return await this.petRepository.findOne({
      where: { id, ownerID: owner.id },
    });
  }

  async createPet(creatPetDTO: CreatePetDTO, owner: Owner): Promise<Pet> {
    return await this.petRepository.createPet(creatPetDTO, owner);
  }

  async deletePet(id: number, owner: Owner): Promise<void> {
    const isAuthorized = this.getPetById(id, owner);
    if (!isAuthorized) {
      throw new UnauthorizedException('Unauthorized');
    }
    const result = await Pet.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pet ID ${id} cant be found!`);
    }
  }

  async updatePet(
    id: number,
    status: PetHealthStatus,
    owner: Owner,
  ): Promise<Pet> {
    const pet = await this.getPetById(id, owner);
    pet.status = status;
    await pet.save();
    return pet;
=======
  getPet() {
    return this.petRepository.find();
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
  }
}
