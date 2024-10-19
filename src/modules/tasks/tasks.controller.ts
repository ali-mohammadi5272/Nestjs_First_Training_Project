import { Body, Controller, Post } from "@nestjs/common";
import { Task } from "./entities/task.entity";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/createTask.dto";

@Controller("api/tasks")
export class TasksController {
  constructor(private readonly _taskService: TasksService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this._taskService.createOne(createTaskDto);
  }
}
