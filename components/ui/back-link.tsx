import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

type BackLinkProps = {
  text: string;
  path: string;
};

const BackLink = ({ text, path }: BackLinkProps) => {
  const r = useRouter();

  return (
    <Button onClick={() => r.push(path)}>
      <ArrowLeftIcon />
      {text}
    </Button>
  );
};

export default BackLink;
