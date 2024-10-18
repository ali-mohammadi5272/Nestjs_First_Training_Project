import { Module } from "@nestjs/common";
import { ProjectsModule } from "./modules/projects/projects.module";
import { TasksModule } from "./modules/tasks/tasks.module";

@Module({
  imports: [ProjectsModule, TasksModule],
})
export class AppModule {}
