import type { NextPage } from 'next';
import { Anchor } from '@mantine/core';

const IndexPage: NextPage = () => {
  return (
    <>
      <p>
        <Anchor href="/page2">page2</Anchor>
      </p>
      <p>
        <Anchor href="/fetch">fetch</Anchor>
      </p>
    </>
  );
};

export default IndexPage;
