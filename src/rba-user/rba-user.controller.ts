import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { RbaUserService } from './rba-user.service';
import { CreateRbaUserDto } from './dto/create-rba-user.dto';
import { UpdateRbaUserDto } from './dto/update-rba-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('rba-user')
export class RbaUserController {
  
  @Inject(JwtService)
  private jwtService: JwtService

  constructor(private readonly rbaUserService: RbaUserService) {}
  @Get('init')
  async initData() {
      await this.rbaUserService.initData();
      return 'done';
  }

  @Post('login')
  async login(@Body() loginUser: UserLoginDto){
    const user = await this.rbaUserService.login(loginUser);
    const token = this.jwtService.sign({
      user: {
        username: user.username,
        roles: user.roles
      }
    });

    console.log(user);

    return {
      token
    }
  }
}
