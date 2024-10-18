import { Module } from "@nestjs/common";
import { ProjectsModule } from "./modules/projects/projects.module";
import { TasksModule } from "./modules/tasks/tasks.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as path from "path";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      synchronize: true,
      database: "nestjs_db",
      type: "postgres",
      entities: [
        path.join(__dirname, "modules", "./**/entities/*.entity.{ts,js}"),
      ],
    }),
    ProjectsModule,
    TasksModule,
  ],
})
export class AppModule {}
