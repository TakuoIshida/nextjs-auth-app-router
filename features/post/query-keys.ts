//  useQuery or useMutationのKeyを定義する

const all = ['posts'] as const;
const usePostsQueryKey = {
  all: [...all] as const,
  list: [...all, 'list'] as const,

  // post.hello
  example: [...all, 'hello'] as const,
};
