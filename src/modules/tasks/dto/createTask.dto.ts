import { IsDefined, IsInt, IsString, Min, MinLength } from "class-validator";

export class CreateTaskDto {
  @IsString()
  @IsDefined()
  @MinLength(3)
  title: string;
  @IsDefined()
  @IsString()
  description: string;
  @IsDefined()
  @IsInt()
  @Min(1)
  projectId: number;
}
