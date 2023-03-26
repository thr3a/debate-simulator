import { NumberInput, Group, Button, Box } from '@mantine/core';
import { UserFormProvider, useUserForm } from '@/features/form2/UserContext';
import { NameInput } from '@/features/form2/NameInput';
import { isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';

export const UserForm = () => {
  const form = useUserForm({
    initialValues: {
      age: 0,
      name: '',
    },

    validate: {
      name: isNotEmpty('名前は必須項目です'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
  });

  const handleSubmit = () => {
    console.log(form.values);
  };

  return (
    <UserFormProvider form={form}>
      <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => handleSubmit())}>
        <NumberInput label="Age" withAsterisk {...form.getInputProps('age')} />
        <NameInput />
        <Group position="center" mt="md">
          <Button type="submit">送信</Button>
        </Group>
      </Box>
    </UserFormProvider>
  );
};
