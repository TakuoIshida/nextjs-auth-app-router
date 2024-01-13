'use client';

import { SidebarProvider } from '@/lib/hooks/use-sidebar';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export async function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <SidebarProvider>{children}</SidebarProvider>
    </SessionProvider>
  );
}
