// domainのusecaseごとのhooksを実装する

import { trpc } from 'components/providers/trpc';

export const useGetPostExample = (input: string) => {
  const { isLoading, data, error } = trpc.post.hello.useQuery({
    text: input,
  });

  return { isLoading, data, error };
};
