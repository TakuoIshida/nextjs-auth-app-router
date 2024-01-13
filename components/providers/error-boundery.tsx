'use client';

import GlobalError from '@/app/global-error';
import { ErrorBoundary } from 'react-error-boundary';

export const ErrorBoundaryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ErrorBoundary
    fallbackRender={(props) => GlobalError({ error: props.error })}
  >
    {children}
  </ErrorBoundary>
);

// TODO: エラーが発生しても、エラー画面に遷移しない。
