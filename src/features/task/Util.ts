import { TaskProps } from '@/features/task/FormContext';

export const assistantPrompt = (value: TaskProps, winner: string): string => {
  if (winner === 'A') {
    return `
Topic: ${value.topic}
Character:
A: 20 year old woman.
B: 16 year old girl.
Winner: A. A refuted B's claim by presenting detailed data.
Dialogue:
Aさん「
      `.trim();
  } else {
    return `
Topic: ${value.topic}
Character:
A: 20 year old woman.
B: 16 year old girl.
Winner: B. B refuted A's claim by presenting detailed data.
Dialogue:
Aさん「
      `.trim();
  }
};
