import '@/app/globals.css';
import { Providers } from '@/components/providers';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/auth';

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
        <Providers session={session}>
          <div>
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
