import { Owner } from './../owners/owner.entity';
import { PetHealthStatus } from './pet-health-status.enum';
import { CreatePetDTO } from './dtos/create-pet.dto';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ValidationPipe,
  Post,
  UsePipes,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PetStatusValidationPipe } from './custom-pipes/pet-status-valiation-pipe';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/owners/get-user-decorator';

@Controller('pet')
@UseGuards(AuthGuard())
export class PetController {
  constructor(private petService: PetService) {}
  @Get(':id')
  getPetById(
    @Param('id', ValidationPipe) id: number,
    @GetUser() owner: Owner,
  ): Promise<Pet> {
    return this.petService.getPetById(id, owner);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPet(
    @Body() createPetDTO: CreatePetDTO,
    @GetUser() owner: Owner,
  ): Promise<Pet> {
    return this.petService.createPet(createPetDTO, owner);
  }

  @Delete(':id')
  deletePet(
    @Param('id', ValidationPipe) id: number,
    @GetUser() owner: Owner,
  ): Promise<void> {
    return this.petService.deletePet(id, owner);
  }

  @Put(':id')
  updatePet(
    @Param('id', ValidationPipe) id: number,
    @GetUser() owner: Owner,
    @Body('status', PetStatusValidationPipe) status: PetHealthStatus,
  ): Promise<Pet> {
    return this.petService.updatePet(id, status, owner);
  }
}
