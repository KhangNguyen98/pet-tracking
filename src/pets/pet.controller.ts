import { PetService } from './pet.service';
import { Controller, Get } from '@nestjs/common';

@Controller('pet')
export class PetController {
 constructor(private petService: PetService){

 }
 @Get()
 getPet(){
 }
}
