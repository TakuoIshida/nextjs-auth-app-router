import { useGetPostExample } from 'features/post/hooks/usePost';

type ExampleType = {
  inputText: string;
};
export const useExample = ({ inputText }: ExampleType) => {
  const postExample = useGetPostExample(inputText);

  return { postExample };
};
