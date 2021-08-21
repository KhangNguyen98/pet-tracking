import { OwnerService } from './owner.service';
import { CreateOwnerDTO } from './dtos/create-owner.dto';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

@Controller('owner')
export class OwnerController {
  constructor(private ownerService: OwnerService) {}
  @Post('/signup')
  signup(@Body(ValidationPipe) createOwnerDTO: CreateOwnerDTO): Promise<void> {
    //cuz i validate by class-validator so we just apply ValidationPipe to check\
    return this.ownerService.signup(createOwnerDTO);
  }

  @Post('/signin')
  signin(
    @Body(ValidationPipe) createOwnerDTO: CreateOwnerDTO,
  ): Promise<{ accessToken: string }> {
    return this.ownerService.signin(createOwnerDTO);
  }
}
