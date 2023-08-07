import { PartialType } from '@nestjs/mapped-types';
import { CreateRbaUserDto } from './create-rba-user.dto';

export class UpdateRbaUserDto extends PartialType(CreateRbaUserDto) {}
