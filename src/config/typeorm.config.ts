<<<<<<< HEAD
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'hoangtuducon',
  password: 'lagoom',
  database: 'pettracking',
  entities: [__dirname + '/../**/*.entity.js'], //what why not ts but js
  synchronize: true,
};
=======
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'hoangtuducon',
  password: 'lagoom',
  database: 'pettracking',
  entities: [__dirname + '/../**/*.entity.js'], //what why not ts but js
  synchronize: true,
};
>>>>>>> a56ed1ad77ac6a8c081ebed546327f3769553f51
