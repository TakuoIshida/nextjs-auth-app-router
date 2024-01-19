'use client';

import Example from 'components/examples/example';
import { useExample } from 'components/examples/example.hooks';

const ExamplePage = () => {
  const { postExample } = useExample({ inputText: 'helloooo' });
  if (postExample.isLoading || !postExample.data) {
    return <div>postExample loading...</div>;
  }

  return (
    <>
      <div>ExamplePage</div>
      <p>postExample: {postExample.data.greeting}</p>
      <Example />
    </>
  );
};

export default ExamplePage;
