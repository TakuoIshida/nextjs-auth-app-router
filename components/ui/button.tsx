import { Button as RadixButton } from '@radix-ui/themes';
import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  preventDefault?: boolean;
  forwardedRef?: React.ForwardedRef<HTMLButtonElement>;
};

export const Button = React.forwardRef(function Button(
  props: ButtonProps,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
  const { text, onClick, preventDefault } = props;
  return (
    <RadixButton
      onClick={(e) => {
        if (e && preventDefault) {
          e.preventDefault();
          onClick();
        }
      }}
      ref={forwardedRef}
    >
      {text}
    </RadixButton>
  );
});
