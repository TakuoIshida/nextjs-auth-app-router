import { Button as RadixButton } from '@radix-ui/themes';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick, ...restProps }: ButtonProps) => {
  return <RadixButton onClick={() => onClick}>{text}</RadixButton>;
};

export default Button;
