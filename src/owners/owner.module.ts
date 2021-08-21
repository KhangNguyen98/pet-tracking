<<<<<<< HEAD
import { JWTStrategy } from './jwt.strategy';
=======
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
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
<<<<<<< HEAD
  providers: [OwnerService, JWTStrategy],
  controllers: [OwnerController],
  exports: [JWTStrategy, PassportModule],
=======
  providers: [OwnerService],
  controllers: [OwnerController],
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
})
export class OwnerModule {}
