import { PetHealthStatus } from './../pet-health-status.enum';
import { BadRequestException, PipeTransform } from '@nestjs/common';
export class PetStatusValidationPipe implements PipeTransform {
  allowedStatuses = [PetHealthStatus.GOOD, PetHealthStatus.BAD];
  transform(value: any) {
    if (!this.isValid(value)) {
      throw new BadRequestException(`Invalid status ${value}`);
    }
    return value;
  }

  isValid(status: any) {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  }
}
