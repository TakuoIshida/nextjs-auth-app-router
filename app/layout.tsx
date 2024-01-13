import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import '@/app/globals.css';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ErrorBoundaryProvider } from '@/components/providers/error-boundery';
import { SidebarProvider } from '@/components/providers/sidebar-provider';
import { TrpcProvider } from '@/components/providers/trpc-provider';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: 'Next.js AI Chatbot',
    template: `%s | Next.js AI Chatbot`,
  },
  description: 'TODO: description',
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ErrorBoundaryProvider>
          <AuthProvider session={session}>
            <TrpcProvider>
              <SidebarProvider>
                <Suspense fallback={<div>Suspense...</div>}>
                  <div>
                    <main className="flex flex-col flex-1 bg-muted/50">
                      {children}
                    </main>
                  </div>
                </Suspense>
              </SidebarProvider>
            </TrpcProvider>
          </AuthProvider>
        </ErrorBoundaryProvider>
      </body>
    </html>
  );
}
