import { TextInput } from '@mantine/core';
import { useUserFormContext } from '@/features/form2/UserContext';

export const NameInput = () => {
  const form = useUserFormContext();
  return <TextInput label="Name" withAsterisk {...form.getInputProps('name')} />;
};
