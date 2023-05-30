import { PartialType } from '@nestjs/mapped-types';
import { CreateDynamicModDto } from './create-dynamic-mod.dto';

export class UpdateDynamicModDto extends PartialType(CreateDynamicModDto) {}
