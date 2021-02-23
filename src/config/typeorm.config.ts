import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: +process.env.PORT,
  username: 'postgres',
  password: 'pass123',
  database: process.env.NAME,
  autoLoadEntities: true,
  synchronize: true,
};
