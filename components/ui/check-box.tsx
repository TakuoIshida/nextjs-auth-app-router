import { Checkbox as RadixCheckBox } from '@radix-ui/themes';

type CheckBoxProps = {
  checked: boolean;
  onChange: () => void;
};

export const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return <RadixCheckBox checked={checked} onChange={onChange} />;
};
