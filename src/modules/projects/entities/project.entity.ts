import { Status } from "../enums/status.enum";
import {
  Column,
  CreateDateColumn,
  Entity,
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
}
