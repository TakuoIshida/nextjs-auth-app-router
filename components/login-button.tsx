'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

interface LoginButtonProps {
  showGithubIcon?: boolean;
  text?: string;
}

export function LoginButton({ text = 'Login', ...props }: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <button
      onClick={() => {
        setIsLoading(true);
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        void signIn('auth0', { callbackUrl: `/` });
      }}
      disabled={isLoading}
      {...props}
    >
      {text}
    </button>
  );
}
