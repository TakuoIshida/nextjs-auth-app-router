import { Select } from '@radix-ui/themes';

type SelectItemsProps = {
  items: string[];
  onChange: (value: string) => void;
  defaultValue?: string | undefined;
};

const SelectItems = ({ items, onChange, defaultValue }: SelectItemsProps) => {
  return (
    <Select.Root
      defaultValue={defaultValue}
      onValueChange={(value) => onChange(value)}
    >
      <Select.Trigger />
      <Select.Content position="popper">
        <Select.Group>
          {items.map((item, i) => (
            <Select.Item key={`${item}+${i}`} value={item}>
              {item}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectItems;
