'use client';

import { CssBaseline } from '@mui/material';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { settings } from 'settings/settings';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <Theme
      appearance="light"
      accentColor="tomato"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="medium"
    >
      <CssBaseline />
      {children}
      {/*  NOTE: themeをpreviewするためのtool */}
      {settings.nodeEnv === 'development' && <ThemePanel />}
    </Theme>
  );
};
