'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getFetch, httpBatchLink, loggerLink } from '@trpc/client';
import { trpc } from 'components/providers/trpc';
import { useState } from 'react';
import superjson from 'superjson';

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 5000 } },
      })
  );

  const url = process.env.NEXTAUTH_URL
    ? `${process.env.NEXTAUTH_URL}/api/trpc/`
    : 'http://localhost:3000/api/trpc/';

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: 'include',
            });
          },
        }),
      ],
      transformer: superjson,
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
