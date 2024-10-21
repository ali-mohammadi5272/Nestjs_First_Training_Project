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
  async deleteOne(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<Response> {
    await this.projectService.deleteOne(id);
    return res.status(HttpStatus.OK).json({
      message: "Project removed successfully :))",
      data: null,
      statusCode: HttpStatus.OK,
    });
  }

  @Put("/:id")
  async updateOne(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateProjectDto: UpdateProjectDTO,
    @Res() res: Response,
  ): Promise<Response> {
    const project = await this.projectService.updateOne(id, updateProjectDto);
    return res.status(HttpStatus.OK).json({
      message: "Project updated successfully :))",
      data: project,
      statusCode: HttpStatus.OK,
    });
  }
}
