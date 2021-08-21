import { JWTStrategy } from './jwt.strategy';
import { OwnerRepository } from './owner.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretkey',
      signOptions: {
        expiresIn: '1h',
      },
    }),
    TypeOrmModule.forFeature([OwnerRepository]),
  ],
  providers: [OwnerService, JWTStrategy],
  controllers: [OwnerController],
  exports: [JWTStrategy, PassportModule],
})
export class OwnerModule {}
