import { createFormContext } from '@mantine/form';

export type TaskProps =  {
  topic: string;
  loading: boolean;
  winner: string;
}

export const [TaskFormProvider, useTaskFormContext, useTaskForm] = createFormContext<TaskProps>();
