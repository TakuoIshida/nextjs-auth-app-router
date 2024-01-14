'use client';

import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { ThemeProviderProps } from 'next-themes/dist/types';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <Theme
      appearance="light"
      accentColor="tomato"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="medium"
    >
      {children}
      {/*  NOTE: themeをpreviewするためのtool */}
      <ThemePanel />
    </Theme>
  );
};

export default ThemeProvider;
