import { IsDefined, IsEnum, IsString, MinLength } from "class-validator";
import { Status } from "../enums/status.enum";

export class UpdateTaskDto {
  @IsString()
  @IsDefined()
  @MinLength(3)
  title: string;
  @IsDefined()
  @IsString()
  description: string;
  @IsDefined()
  @IsEnum(Status)
  status: Status;
}
