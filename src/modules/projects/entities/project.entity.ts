import { Task } from "src/modules/tasks/entities/task.entity";
import { Status } from "../enums/status.enum";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "projects" })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  title: string;
  @Column({
    type: "enum",
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;
  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;
  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
