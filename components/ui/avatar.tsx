import { Avatar as RadixAvatar } from '@radix-ui/themes';

type AvatarProps = {
  src: string;
  fallback?: string;
};

export const Avatar = ({ src, fallback = '' }: AvatarProps) => {
  return <RadixAvatar src={src} fallback={fallback} radius="full" />;
};
