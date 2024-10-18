import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export enum TaskStatus {
  Pending = "Pending",
  Doing = "Doing",
  End = "End",
  Cancel = "Cancel",
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  title: string;
  @Column({
    type: "enum",
    enum: [
      TaskStatus.Pending,
      TaskStatus.Doing,
      TaskStatus.End,
      TaskStatus.Cancel,
    ],
    default: TaskStatus.Pending,
  })
  status: TaskStatus;
  @Column()
  projectId: number;
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
