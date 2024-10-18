import { Controller } from "@nestjs/common";
import { ProjectsService } from "./projects.service";

@Controller("api/projects")
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}
}
