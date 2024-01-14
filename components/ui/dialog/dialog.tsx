'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import {
  IconButton,
  Button as RadixButton,
  Dialog as RadixDialog,
} from '@radix-ui/themes';
import './styles.css';

type DialogProps = {
  title: string;
  description: string;
  onChangeLabel: string;
  open: boolean;
  onClose: () => void;
  onChange: () => void;
  children: React.ReactNode;
};

export const Dialog = ({
  title,
  description,
  onChangeLabel,
  open,
  onClose,
  onChange,
  children,
}: DialogProps) => {
  return (
    <>
      {open && (
        <RadixDialog.Root open={open}>
          <RadixDialog.Trigger></RadixDialog.Trigger>
          <RadixDialog.Content>
            <RadixDialog.Title>{title}</RadixDialog.Title>
            <RadixDialog.Description>{description}</RadixDialog.Description>
            <div>{children}</div>
            <RadixDialog.Close>
              <RadixButton onClick={() => onClose()}>キャンセル</RadixButton>
            </RadixDialog.Close>
            <RadixDialog.Close>
              <RadixButton onClick={() => onChange()}>
                {onChangeLabel}
              </RadixButton>
            </RadixDialog.Close>
            <RadixDialog.Close>
              <IconButton
                onClick={() => onClose()}
                color="gray"
                radius="full"
                size="1"
              >
                <Cross2Icon />
              </IconButton>
            </RadixDialog.Close>
          </RadixDialog.Content>
        </RadixDialog.Root>
      )}
    </>
  );
};
