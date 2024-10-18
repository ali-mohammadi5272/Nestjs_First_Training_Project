import { Module } from "@nestjs/common";
import { Task } from "./enitities/task.entity";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";

@Module({
  imports: [Task],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
