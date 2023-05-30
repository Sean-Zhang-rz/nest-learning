import { Injectable } from '@nestjs/common';
import { CreateDynamicModDto } from './dto/create-dynamic-mod.dto';
import { UpdateDynamicModDto } from './dto/update-dynamic-mod.dto';

@Injectable()
export class DynamicModService {
  create(createDynamicModDto: CreateDynamicModDto) {
    return 'This action adds a new dynamicMod';
  }

  findAll() {
    return `This action returns all dynamicMod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dynamicMod`;
  }

  update(id: number, updateDynamicModDto: UpdateDynamicModDto) {
    return `This action updates a #${id} dynamicMod`;
  }

  remove(id: number) {
    return `This action removes a #${id} dynamicMod`;
  }
}
