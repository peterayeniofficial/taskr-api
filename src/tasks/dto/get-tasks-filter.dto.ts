import { TaskStatus } from '../task.model';

export class GetTaskFilterDto {
  readonly status: TaskStatus;
  readonly search: string;
}
