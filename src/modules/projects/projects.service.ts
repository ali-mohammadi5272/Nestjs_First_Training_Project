import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { Repository } from "typeorm";
import { CreateProjectDTO } from "./dto/createProject.dto";
import { UpdateProjectDTO } from "./dto/updateProject.dto";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private _repository: Repository<Project>,
  ) {}

  getAll(): Promise<Project[]> {
    return this._repository.find({ relations: ["tasks"] });
  }

  createOne(createProjectDTO: CreateProjectDTO): Promise<Project> {
    const newProject = this._repository.create(createProjectDTO);
    return this._repository.save(newProject);
  }

  getOne(id: number): Promise<Project> {
    return this._repository.findOneBy({ id });
  }

  deleteOne(id: number): void {
    this._repository.delete({ id });
  }

  async updateOne(
    id: number,
    updateProjectDTO: UpdateProjectDTO,
  ): Promise<Project> {
    const test = await this._repository.update({ id }, updateProjectDTO);
    console.log(test);
    const updatedUser = this._repository.findOneBy({ id });
    return updatedUser;
  }
}
