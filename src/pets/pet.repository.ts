import { Owner } from './../owners/owner.entity';
import { CreatePetDTO } from './dtos/create-pet.dto';
import { GetPetFilterDTO } from './dtos/get-pet-filter.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Pet } from './pet.entity';
@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {
  async getPet(gePettFilterDTO: GetPetFilterDTO, owner: Owner) {
    const { status, search } = gePettFilterDTO;
    const query = this.createQueryBuilder('pet');
    query.where('pet.ownerID=:ownerID', { ownerID: owner.id });
    query.andWhere('pet.ownerId=:ownerID', { ownerID: owner.id });
    if (status) {
      query.andWhere('pet.status=:status', { status });
    }

    if (search) {
      query.andWhere('pet.name LIKE:search ', { search: `%${search}%` });
    }

    const pet = await query.getMany();
    return pet;
  }

  async createPet(createPetDTO: CreatePetDTO, owner: Owner): Promise<Pet> {
    const { name, status } = createPetDTO;
    const pet = new Pet();
    pet.name = name;
    pet.status = status;
    pet.owner = owner;
    await pet.save();

    //we cant return information of owner so remove it when send respond but not affect data in DB
    delete pet.owner;
    return pet;
  }
}
