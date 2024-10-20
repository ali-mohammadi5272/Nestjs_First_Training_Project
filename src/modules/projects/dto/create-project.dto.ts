import { IsDefined, IsString, MinLength } from "class-validator";

export class CreateProjectDTO {
  @IsString()
  @IsDefined()
  @MinLength(3)
  title: string;
}
