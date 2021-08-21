<<<<<<< HEAD
import { PetHealthStatus } from './../pet-health-status.enum';
import { IsIn, IsOptional } from 'class-validator';

export class GetPetFilterDTO {
  @IsOptional()
  @IsIn([PetHealthStatus.BAD, PetHealthStatus.GOOD])
  status: PetHealthStatus;

  @IsOptional()
  search: string;
}
=======
import { PetHealthStatus } from './../pet-health-status.enum';
import { IsIn, IsOptional } from 'class-validator';

export class GetPetFilterDTO {
  @IsOptional()
  @IsIn([PetHealthStatus.BAD, PetHealthStatus.GOOD])
  status: PetHealthStatus;

  @IsOptional()
  search: string;
}
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
