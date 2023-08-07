import { Module } from '@nestjs/common';
import { RbaUserService } from './rba-user.service';
import { RbaUserController } from './rba-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/rba-user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [RbaUserController],
  providers: [RbaUserService],
  exports:[RbaUserService]
})
export class RbaUserModule {}
