import { createFormContext } from '@mantine/form';

type UserFormProps = {
  age: number;
  name: string;
}

// You can give context variables any name
export const [UserFormProvider, useUserFormContext, useUserForm] = createFormContext<UserFormProps>();
