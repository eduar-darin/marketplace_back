import { IsDate, IsEmail, IsNotEmpty, Length } from 'class-validator';

// Requirements of client register
export class CreateRegisterClientDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8)
  password: string;

  @IsDate()
  date: Date;
}
