import {
  Controller,
  Post,
  Body,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { AddUserDto } from './user.dto';

@Controller({
  path: 'user',
  version: [VERSION_NEUTRAL],
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @ApiOperation({
    summary: '新增用户',
  })

  @Post('/add')
  create(@Body() user: AddUserDto) {
    return this.userService.createOrSave(user);
  }
}
