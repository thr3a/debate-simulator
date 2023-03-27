import { Title, Text } from '@mantine/core';
import { TITLE, DESCRIPTION } from '@/constant/env';

export const Header = () => {
  return (
    <>
      <Title order={1} mt={20} mb={20}>{TITLE}</Title>
      <Text fz="sm" mb="md">{DESCRIPTION}</Text>
    </>
  );
};
