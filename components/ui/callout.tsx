import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';
import { Callout as RadixCallout } from '@radix-ui/themes';

export const calloutLevel = {
  info: 'blue',
  success: 'green',
  warning: 'red',
} as const;

type calloutLevel = (typeof calloutLevel)[keyof typeof calloutLevel];

type CallOutProps = {
  text: string;
  level: calloutLevel;
};

export const Callout = ({ text, level }: CallOutProps) => {
  return (
    <RadixCallout.Root color={level}>
      <RadixCallout.Icon>
        {level === calloutLevel.warning ? (
          <ExclamationTriangleIcon />
        ) : (
          <InfoCircledIcon />
        )}
      </RadixCallout.Icon>
      <RadixCallout.Text>{text}</RadixCallout.Text>
    </RadixCallout.Root>
  );
};
