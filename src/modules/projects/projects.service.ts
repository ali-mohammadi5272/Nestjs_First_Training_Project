import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { Repository } from "typeorm";
import { CreateProjectDTO } from "./dto/createProject.dto";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private _repository: Repository<Project>,
  ) {}

  createOne(createProjectDTO: CreateProjectDTO): Promise<Project> {
    const newProject = this._repository.create(createProjectDTO);
    return this._repository.save(newProject);
  }
}
