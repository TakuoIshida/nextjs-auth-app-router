import { Tooltip as RadixTooltip } from '@radix-ui/themes';

type TooltipProps = {
  content: string;
  children: React.ReactNode;
};

export const Tooltip = ({ content, children }: TooltipProps) => {
  return <RadixTooltip content={content}>{children}</RadixTooltip>;
};
