'use client';

import { useSearchParams } from 'next/navigation';
import Example from '../../components/examples/example';

const ExamplePage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  console.log('tab', tab);

  return (
    <>
      <div>ExamplePage</div>
      <Example />
    </>
  );
};

export default ExamplePage;
