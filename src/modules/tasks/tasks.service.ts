import { UpdateTaskDto } from "./dto/update-task.dto";
import { CreateTaskDto } from "./dto/createTask.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private _repository: Repository<Task>,
  ) {}

  getAll(): Promise<Task[]> {
    return this._repository.find({
      relations: ["project"],
    });
  }

  async createOne(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = this._repository.create({
      title: createTaskDto.title,
      description: createTaskDto.description,
      project: createTaskDto.projectId,
    });
    const task: Task = await this._repository.save(newTask);
    return this._repository.findOne({
      where: { id: task.id },
      relations: ["project"],
    });
  }

  getOne(id: number): Promise<Task> {
    return this._repository.findOne({ where: { id }, relations: ["project"] });
  }

  async updateOne(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this._repository.update({ id }, updateTaskDto);
    const updatedTask = this._repository.findOne({
      where: { id },
      relations: ["project"],
    });
    return updatedTask;
  }
}
