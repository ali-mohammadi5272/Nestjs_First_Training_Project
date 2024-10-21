import { ProjectsService } from "./projects.service";
import { Project } from "./entities/project.entity";
import { CreateProjectDTO } from "./dto/create-project.dto";
import { UpdateProjectDTO } from "./dto/update-project.dto";
import { Status } from "./enums/status.enum";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
} from "@nestjs/common";
import { Response } from "express";

@Controller("api/projects")
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  getAll(
    @Query("status") status: Status,
    @Query("limit") limit: number = 10,
    @Query("page") page: number = 1,
  ): Promise<Project[]> {
    return this.projectService.getAll(status, limit, page);
  }

  @Post()
  createOneProject(
    @Body() createProjectDto: CreateProjectDTO,
  ): Promise<Project> {
    return this.projectService.createOne(createProjectDto);
  }

  @Get("/:id")
  async getOne(
    @Res() res: Response,
    @Param("id", ParseIntPipe) id: number,
  ): Promise<Response> {
    const data = await this.projectService.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: "Successfully GET Project :))",
      data,
      statusCode: HttpStatus.OK,
    });
  }

  @Delete("/:id")
  deleteOne(@Param("id", ParseIntPipe) id: number): void {
    this.projectService.deleteOne(id);
  }

  @Put("/:id")
  updateOne(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateProjectDto: UpdateProjectDTO,
  ): Promise<Project> {
    return this.projectService.updateOne(id, updateProjectDto);
  }
}
