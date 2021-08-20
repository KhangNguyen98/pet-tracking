import { GetPetFilterDTO } from './dtos/get-pet-filter.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Pet } from './pet.entity';
@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {
  async getPet(gePettFilterDTO: GetPetFilterDTO) {
    const query = this.createQueryBuilder('pet');
  }
}
