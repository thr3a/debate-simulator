import { TaskProps } from '@/features/task/FormContext';

export const assistantPrompt = (value: TaskProps): string => {
  if (value.winner === 'A') {
    return `
Topic: ${value.topic}
Character:
A: A high school girl.
B: A high school girl whose logical thinking ability is inferior to A.
Result: A and B were arguing and A won the argument.
Dialogue (up to 12):
Aさん「
      `.trim();
  } else {
    return `
Topic: ${value.topic}
Character:
A: A high school girl whose logical thinking ability is inferior to B.
B: A high school girl.
Winner: A and B were arguing and B won the argument.
Dialogue (up to 12):
Aさん「
      `.trim();
  }
};
