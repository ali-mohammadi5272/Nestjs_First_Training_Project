import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { Project } from "./entities/project.entity";
import { CreateProjectDTO } from "./dto/createProject.dto";

@Controller("api/projects")
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  getAll(): Promise<Project[]> {
    return this.projectService.getAll();
  }

  @Post()
  createOneProject(@Body() body: CreateProjectDTO): Promise<Project> {
    return this.projectService.createOne(body);
  }

  @Get("/:id")
  getOne(@Param("id", ParseIntPipe) id: number): Promise<Project> {
    return this.projectService.getOne(id);
  }
}
