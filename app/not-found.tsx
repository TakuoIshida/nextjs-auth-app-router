'use client';

import Link from 'next/link';

const NotFound = () => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <Link href="/">topに戻る</Link>
    </div>
  );
};
export default NotFound;
