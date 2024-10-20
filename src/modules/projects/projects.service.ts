import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { Repository } from "typeorm";
import { CreateProjectDTO } from "./dto/create-project.dto";
import { UpdateProjectDTO } from "./dto/update-project.dto";
import { Status } from "./enums/status.enum";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly _repository: Repository<Project>,
  ) {}

  getAll(status?: Status): Promise<Project[]> {
    const query = this._repository.createQueryBuilder("projects");
    if (status) {
      query.where("status = :status", { status });
    }

    return query.getMany();
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
