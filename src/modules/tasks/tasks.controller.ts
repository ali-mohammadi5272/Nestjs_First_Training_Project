import { Task } from "./entities/task.entity";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/createTask.dto";
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller("api/tasks")
export class TasksController {
  constructor(private readonly _taskService: TasksService) {}

  @Get()
  getAll(): Promise<Task[]> {
    return this._taskService.getAll();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this._taskService.createOne(createTaskDto);
  }

  @Get("/:id")
  getOne(@Param("id", ParseIntPipe) id: number): Promise<Task> {
    return this._taskService.getOne(id);
  }

  @Put("/:id")
  updateOne(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: UpdateTaskDto,
  ): Promise<Task> {
    return this._taskService.updateOne(id, body);
  }
}
