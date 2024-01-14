'use client';

import BackLink from '@/components/ui/back-link';
import Button from '@/components/ui/button';
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
      <Button text={'LogOut'} onClick={() => void signOut()} />
      <BackLink text={'to top'} path={'/'} />
    </div>
  );
}
