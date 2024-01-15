import { Box, Tabs as RadixTabs, Text } from '@radix-ui/themes';

type TabsProps = {
  selectedLabel: string;
  labels: string[];
  onChange: (value: string) => void;
};

export const Tabs = ({ selectedLabel, labels, onChange }: TabsProps) => {
  return (
    <RadixTabs.Root defaultValue={selectedLabel}>
      <RadixTabs.List>
        {labels.map((label, i) => (
          <RadixTabs.Trigger key={`${label}${i}`} value={label}>
            {label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>

      <Box px="4" pt="2" pb="2">
        {labels.map((label, i) => (
          <RadixTabs.Content key={`${label}${i}`} value={label}>
            <Text size="2">{label}</Text>
          </RadixTabs.Content>
        ))}
      </Box>
    </RadixTabs.Root>
  );
};
