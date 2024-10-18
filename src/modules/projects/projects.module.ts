import { Module } from "@nestjs/common";
import { Project } from "./enitities/project.entity";
import { ProjectsService } from "./projects.service";
import { ProjectsController } from "./projects.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
