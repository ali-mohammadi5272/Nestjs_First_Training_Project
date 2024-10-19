import { Project } from "src/modules/projects/entities/project.entity";
import { Status } from "../enums/status.enum";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "tasks" })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  title: string;
  @Column()
  description: string;
  @Column({
    type: "enum",
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;
  @Column()
  @ManyToOne(() => Project, (project) => project.id)
  project: number;
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
}
