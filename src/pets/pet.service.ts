import { PetRepository } from './pet.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetRepository)
    private petRepository: PetRepository,
  ) {}
  getPet() {
    return this.petRepository.find();
  }
}
