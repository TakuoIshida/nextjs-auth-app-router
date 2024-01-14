import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';

type SearchTextFieldProps = {
  placeholder?: string;
  onChange: (value: string) => void;
};

export const SearchTextField = ({
  placeholder = '入力してください',
  onChange,
}: SearchTextFieldProps) => {
  return (
    <>
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </TextField.Root>
    </>
  );
};
