<<<<<<< HEAD
import { bcrypt } from 'bcrypt';
import { CreateOwnerDTO } from './dtos/create-owner.dto';
import { Owner } from './owner.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

//damn bcrypt
const bcrypt = require('bcrypt'); //is it true that cant import it by style eslint
@EntityRepository(Owner)
export class OwnerRepository extends Repository<Owner> {
  async signup(createOwner: CreateOwnerDTO): Promise<void> {
    const { username, password } = createOwner;
    const owner = new Owner();
    owner.username = username;
    const hashPassword = await bcrypt.hash(password, 12);
    owner.password = hashPassword;
    try {
      await owner.save();
    } catch (error) {
      if (error.code === '23505') {
        //23505 is err when duplicate value and type is string
        throw new ConflictException(
          'Username is existed.Please choose another',
        );
      }
      throw new InternalServerErrorException(
        'We got trouble with DB.Please check error!',
      );
    }
  }

  async signin(createOwnerDTO: CreateOwnerDTO): Promise<string> {
    const { username, password } = createOwnerDTO;
    const owner = await Owner.find({ username }); //cuz this return an array of Owner fuk
    if (owner && (await bcrypt.compare(password, owner[0].password))) {
      return username;
    }
    return null;
  }
}
=======
import { bcrypt } from 'bcrypt';
import { CreateOwnerDTO } from './dtos/create-owner.dto';
import { Owner } from './owner.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

//damn bcrypt
const bcrypt = require('bcrypt'); //is it true that cant import it by style eslint
@EntityRepository(Owner)
export class OwnerRepository extends Repository<Owner> {
  async signup(createOwner: CreateOwnerDTO): Promise<void> {
    const { username, password } = createOwner;
    const owner = new Owner();
    owner.username = username;
    const hashPassword = await bcrypt.hash(password, 12);
    owner.password = hashPassword;
    try {
      await owner.save();
    } catch (error) {
      if (error.code === '23505') {
        //23505 is err when duplicate value and type is string
        throw new ConflictException(
          'Username is existed.Please choose another',
        );
      }
      throw new InternalServerErrorException(
        'We got trouble with DB.Please check error!',
      );
    }
  }

  async signin(createOwnerDTO: CreateOwnerDTO): Promise<string> {
    const { username, password } = createOwnerDTO;
    const owner = await Owner.find({ username }); //cuz this return an array of Owner fuk
    if (owner && (await bcrypt.compare(password, owner[0].password))) {
      return username;
    }
    return null;
  }
}
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
