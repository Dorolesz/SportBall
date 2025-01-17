import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';
import { IsNotEmpty, IsString, IsInt, IsDateString } from 'class-validator';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {

  @IsString()
    @IsNotEmpty()
    name?: string;
  
    @IsInt()
    @IsNotEmpty()
    goalCount?: number;
  
    @IsDateString()
    @IsNotEmpty()
    birthDate?: string;
}
