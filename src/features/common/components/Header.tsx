import { Title, Text } from '@mantine/core';

export const Header = () => {
  return (
    <>
      <Title order={1} mt={20} mb={20}>AIディスカッション</Title>
      <Text fz="sm" mb="md">バトルしてほしいお題を入れるとJK二人が勝手に議論します。</Text>
    </>
  );
};
