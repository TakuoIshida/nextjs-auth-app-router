'use client';

import { LoginButton } from '@/components/login-button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const { data: session } = useSession();
  // const { data: session } = useSession();
  // redirect to home if user is already logged in
  const r = useRouter();
  if (session?.user) {
    // redirect('/');
    r.push('/');
  }
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <LoginButton />
    </div>
  );
}
