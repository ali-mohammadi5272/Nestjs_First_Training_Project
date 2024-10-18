import { Module } from "@nestjs/common";
import { Project } from "./enitities/project.entity";
import { ProjectsService } from "./projects.service";
import { ProjectsController } from "./projects.controller";

@Module({
  imports: [Project],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
