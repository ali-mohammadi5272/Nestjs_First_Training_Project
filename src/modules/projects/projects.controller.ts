import { ProjectsService } from "./projects.service";
import { Project } from "./entities/project.entity";
import { CreateProjectDTO } from "./dto/create-project.dto";
import { UpdateProjectDTO } from "./dto/update-project.dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { Status } from "./enums/status.enum";

@Controller("api/projects")
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  getAll(@Query("status") status?: Status): Promise<Project[]> {
    return this.projectService.getAll(status);
  }

  @Post()
  createOneProject(@Body() body: CreateProjectDTO): Promise<Project> {
    return this.projectService.createOne(body);
  }

  @Get("/:id")
  getOne(@Param("id", ParseIntPipe) id: number): Promise<Project> {
    return this.projectService.getOne(id);
  }

  @Delete("/:id")
  deleteOne(@Param("id", ParseIntPipe) id: number): void {
    this.projectService.deleteOne(id);
  }

  @Put("/:id")
  updateOne(
    @Param("id") id: number,
    @Body() body: UpdateProjectDTO,
  ): Promise<Project> {
    return this.projectService.updateOne(id, body);
  }
}
