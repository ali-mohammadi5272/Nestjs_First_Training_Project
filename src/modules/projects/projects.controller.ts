import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { Project } from "./enitities/project.entity";
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
}
