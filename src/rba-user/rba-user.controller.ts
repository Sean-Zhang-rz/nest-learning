import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UnauthorizedException, Query } from '@nestjs/common';
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

  @Get('refresh')
  async refresh(@Query('refresh_token') refreshToken: string){
    try {
      const data = this.jwtService.verify(refreshToken)
      const user = await this.rbaUserService.findUserById(data.userId);
      // const token = this.jwtService.sign({
      //   user: {
      //     username: user.username,
      //     roles: user.roles 
      //   }
      // });
      const access_token = this.jwtService.sign({
        userId: user?.id,
        username: user?.username,
        // roles: user.roles
      }, {
        expiresIn: '30m'
      });

      const refresh_token = this.jwtService.sign({
        userId: user?.id
      }, {
        expiresIn: '7d'
      })

      console.log(user);

      return {
        access_token,
        refresh_token
      }
    } catch(err) {
      throw new UnauthorizedException('token已失效，请重新登录')
    }
  }
  
  @Post('login')
  async login(@Body() loginUser: UserLoginDto){
    const user = await this.rbaUserService.login(loginUser);
    const access_token = this.jwtService.sign({
      userId: user.id,
      username: user.username,
    }, {
      expiresIn: '30m'
    });
    const refresh_token = this.jwtService.sign({
      userId: user.id
    }, {
      expiresIn: '7d'
    })

    console.log(user);

    return {
      access_token,
      refresh_token
    }
  }
}
