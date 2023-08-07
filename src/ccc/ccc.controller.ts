import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from 'src/configurableModuleClass';
import { RequireLogin, RequirePermission } from 'src/custom-decorator';
import { CccService } from './ccc.service';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';

@Controller('ccc')
@RequireLogin()
export class CccController {

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: typeof OPTIONS_TYPE,
    private readonly cccService: CccService
  ) {}

  @Get()
  @RequirePermission('查询 bbb')
  findAll() {
    console.log(this.options);
    
    return this.cccService.findAll();
  }
}
