import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum ProjectStatus {
  Pending = "Pending",
  Doing = "Doing",
  End = "End",
  Cancel = "Cancel",
}

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  title: string;
  @Column({
    type: "enum",
    enum: [
      ProjectStatus.Pending,
      ProjectStatus.Doing,
      ProjectStatus.End,
      ProjectStatus.Cancel,
    ],
    default: ProjectStatus.Pending,
  })
  status: ProjectStatus;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;
}
