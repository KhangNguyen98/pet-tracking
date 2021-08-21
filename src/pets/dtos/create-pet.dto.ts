import { IsIn, IsNotEmpty } from 'class-validator';
import { PetHealthStatus } from './../pet-health-status.enum';
export class CreatePetDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsIn([PetHealthStatus.BAD, PetHealthStatus.GOOD])
  status: PetHealthStatus;
}
