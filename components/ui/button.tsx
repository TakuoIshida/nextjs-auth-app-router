import { Button as RadixButton } from '@radix-ui/themes';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick, ...restProps }: ButtonProps) => {
  return <RadixButton onClick={() => onClick}>{text}</RadixButton>;
};
