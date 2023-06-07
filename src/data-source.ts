import "reflect-metadata";
import { DataSource } from 'typeorm';
import { Aaa }from './aaa/entities/aaa.entity'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'sean',
  database: 'practice',
  synchronize: true,
  logging: true,
  entities: [Aaa],
  migrations: [],
  subscribers: [],
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password'
  }
})