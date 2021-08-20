import { TypeOrmConfig } from './config/typeorm.config';
import { Module } from '@nestjs/common';
import { PetModule } from './pets/pet.module';
import { OwnerModule } from './owners/owner.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PetModule, OwnerModule, TypeOrmModule.forRoot(TypeOrmConfig)],
})
export class AppModule {}
