import '@/app/globals.css';
import { AuthProvider } from '@/components/providers/auth-provider';
import { SidebarProvider } from '@/components/providers/sidebar-provider';
import { TrpcProvider } from '@/components/providers/trpc-provider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/auth';

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
        <AuthProvider session={session}>
          <TrpcProvider>
            <SidebarProvider>
              <div>
                <main className="flex flex-col flex-1 bg-muted/50">
                  {children}
                </main>
              </div>
            </SidebarProvider>
          </TrpcProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
