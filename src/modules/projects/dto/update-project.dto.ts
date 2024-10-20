import { IsDefined, IsString, MinLength } from "class-validator";
import { Status } from "../enums/status.enum";

export class UpdateProjectDTO {
  @IsString()
  @IsDefined()
  @MinLength(3)
  title: string;
  @IsDefined()
  status: Status;
}
