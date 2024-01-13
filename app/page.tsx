'use client';

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function TopPage() {
  const { data: session } = useSession();
  if (!session?.user) {
    redirect('/sign-in');
  }
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      This is TopPage
      <button onClick={() => signOut()}>signOut</button>
    </div>
  );
}
