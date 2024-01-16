import { authOptions } from 'app/api/auth/[...nextauth]/auth';
import { AuthProvider } from 'components/providers/auth-provider';
import { ErrorBoundaryProvider } from 'components/providers/error-boundery';
import { ThemeProvider } from 'components/providers/theme-provider';
import { ToastProvider } from 'components/providers/toast-provider';
import { TrpcProvider } from 'components/providers/trpc-provider';
import { MenuAppBar } from 'components/ui/app-bar';
import { Loading } from 'components/ui/loading';
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
        <ThemeProvider>
          <ErrorBoundaryProvider>
            <AuthProvider session={session}>
              <TrpcProvider>
                <Suspense fallback={<Loading />}>
                  <ToastProvider>
                    {session ? (
                      <>
                        <MenuAppBar />
                        {children}
                      </>
                    ) : (
                      <>{children}</>
                    )}
                  </ToastProvider>
                </Suspense>
              </TrpcProvider>
            </AuthProvider>
          </ErrorBoundaryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
