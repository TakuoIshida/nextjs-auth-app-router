'use client';

import { signIn, useSession } from 'next-auth/react';

export default function TopPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => void signIn('auth0'),
  });

  if (status === 'loading') return <div>loading...</div>;

  return (
    <>
      This is TopPage
      <p>{session.user?.name}</p>
      <p>{session.user?.email}</p>
    </>
  );
}
