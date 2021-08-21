import { JWTPayLoad } from './jwt-payload.interface';
import { Owner } from './owner.entity';
import { CreateOwnerDTO } from './dtos/create-owner.dto';
import { OwnerRepository } from './owner.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(OwnerRepository)
    private ownerRepository: OwnerRepository,
    private jwtService: JwtService,
  ) {}

  async signup(createOwnerDTO: CreateOwnerDTO): Promise<void> {
    //actually service is place we handle logic but i config username is unique in db so i will throw exception in repository
    return await this.ownerRepository.signup(createOwnerDTO);
  }

  //be careful to know stuff need await
  async signin(
    createOwnerDTO: CreateOwnerDTO,
  ): Promise<{ accessToken: string }> {
    const username = await this.ownerRepository.signin(createOwnerDTO);
    if (!username) {
      throw new UnauthorizedException('Invalid username or password');
    }
    const payload: JWTPayLoad = { username };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
