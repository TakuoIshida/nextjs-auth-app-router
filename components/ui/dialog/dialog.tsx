'use client';

import * as RadixDialog from '@radix-ui/react-dialog';
import { Flex, Button as RadixButton } from '@radix-ui/themes';
import { Button } from '../button';

type DialogProps = {
  title: string;
  description: string;
  onChangeLabel: string;
  onClose: () => void;
  onChange: () => void;
  triggerRef: React.ForwardedRef<HTMLButtonElement>;
  children: React.ReactNode;
};

export const Dialog = ({
  title,
  description,
  onChangeLabel,
  onClose,
  onChange,
  triggerRef,
  children,
}: DialogProps) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <Button
          text="Dialog open"
          onClick={() => {
            console.log('Dialog open');
          }}
          preventDefault={true}
          forwardedRef={triggerRef}
        />
      </RadixDialog.Trigger>
      <RadixDialog.Content style={{ maxWidth: 450 }}>
        <RadixDialog.Title>{title}</RadixDialog.Title>
        <RadixDialog.Description>{description}</RadixDialog.Description>
        <div>{children}</div>
        <Flex gap="3" mt="4" justify="end">
          <RadixDialog.Close>
            <RadixButton variant="soft" color="gray" onClick={() => onClose()}>
              キャンセル
            </RadixButton>
          </RadixDialog.Close>
          <RadixDialog.Close>
            <RadixButton onClick={() => onChange()}>
              {onChangeLabel}
            </RadixButton>
          </RadixDialog.Close>
        </Flex>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
