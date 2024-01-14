import { CheckedState } from '@radix-ui/react-checkbox';
import { Checkbox as RadixCheckBox } from '@radix-ui/themes';

type CheckBoxProps = {
  checked: boolean;
  onChange: (checked: CheckedState) => void;
};

export const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <RadixCheckBox
      checked={checked}
      onCheckedChange={(checked) => onChange(checked)}
    />
  );
};
