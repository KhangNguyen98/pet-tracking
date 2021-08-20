import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateOwnerDTO {
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  username: string;

  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{5,20}$/, {
    message: 'Password must have letter and number with length is 5-20',
  })
  password: string;
}
