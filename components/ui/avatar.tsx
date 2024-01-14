import { Avatar as RadixAvatar } from '@radix-ui/themes';

type AvatarProps = {
  fallback: string;
  src: string;
};

export const Avatar = ({ src, fallback }: AvatarProps) => {
  return <RadixAvatar src={src} fallback={fallback} />;
};
