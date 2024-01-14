import { TextArea as RadixTextArea, Responsive } from '@radix-ui/themes';

type TextAreaProps = {
  placeholder?: string;
  size?: Responsive<'3' | '1' | '2'> | undefined;
};

const TextArea = ({
  placeholder = '入力してください',
  size = '3',
}: TextAreaProps) => {
  return <RadixTextArea size={size} placeholder={placeholder} />;
};

export default TextArea;
