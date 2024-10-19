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
}
