import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { Repository } from "typeorm";
import { CreateProjectDTO } from "./dto/create-project.dto";
import { UpdateProjectDTO } from "./dto/update-project.dto";
import { Status } from "./enums/status.enum";
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly _repository: Repository<Project>,
  ) {}

  getAll(status: Status, limit: number, page: number): Promise<Project[]> {
    const query = this._repository.createQueryBuilder("projects");
    if (status) {
      query.where("status = :status", { status });
    }
    query.skip((page - 1) * limit).take(limit);

    return query.getMany();
  }

  createOne(createProjectDTO: CreateProjectDTO): Promise<Project> {
    const newProject = this._repository.create(createProjectDTO);
    return this._repository.save(newProject);
  }

  async getOne(id: number): Promise<Project> {
    const project = await this._repository.findOneBy({ id });
    if (!project) {
      throw new NotFoundException(`Project with id ${id} is not found !!`);
    }
    return project;
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this._repository.delete({ id });
    if (!result.affected) {
      throw new NotFoundException(`Project with id ${id} is not found !!`);
    }
  }

  async updateOne(
    id: number,
    updateProjectDTO: UpdateProjectDTO,
  ): Promise<Project> {
    const project = await this._repository.findOneBy({ id });
    if (!project) {
      throw new NotFoundException(`Project with id ${id} is not found !!`);
    }

    try {
      await this._repository.update({ id }, updateProjectDTO);
      const updatedProject: Project = await this._repository.findOneBy({ id });
      return updatedProject;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
