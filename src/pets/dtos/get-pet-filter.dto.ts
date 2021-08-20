import { PetHealthStatus } from './../pet-health-status.enum';
import { IsIn, IsOptional } from 'class-validator';

export class GetPetFilterDTO {
  @IsOptional()
  @IsIn([PetHealthStatus.BAD, PetHealthStatus.GOOD])
  status: PetHealthStatus;

  @IsOptional()
  search: string;
}
