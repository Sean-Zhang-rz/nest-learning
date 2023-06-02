import {IsInt} from 'class-validator'

export class CreateEeeDto {
  name: string;
  @IsInt({
    message(args) {
      console.log(args);
      return '格式不正确，必须传入整数'
    }
  })
  age: number;
  sex: boolean;
  hobbie: string[]
}
