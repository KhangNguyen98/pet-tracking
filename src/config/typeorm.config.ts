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
