'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function TopPage() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => router.push(`/sign-in`),
  });
  if (status === 'loading') return <div>loading...</div>;

  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      This is TopPage
      <p>{session.user?.name}</p>
      <p>{session.user?.email}</p>
      <button onClick={() => void signOut()}>signOut</button>
      <button
        onClick={() => {
          throw new Error('worng');
        }}
      >
        Error
      </button>
    </div>
  );
}
