export class createPlayerDto {}
import { IsInt, IsNotEmpty, IsString, IsDateString } from "class-validator";

export class CreatePlayerDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  goalCount: number;

  @IsDateString()
  @IsNotEmpty()
  birthDate: string;
}
