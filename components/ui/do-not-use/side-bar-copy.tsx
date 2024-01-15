'use client';

import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Box, Button, Flex, SelectSeparator, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import './styles.css';

type SideBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const SideBar = ({ open, setOpen }: SideBarProps) => {
  const router = useRouter();

  const menuItems: { text: string; path: string; icon?: React.ReactNode }[] = [
    {
      text: 'Top',
      path: '/',
    },
    {
      text: 'example',
      path: '/example',
    },
  ];

  //Buttonの文字に横幅足りない分だけ空白を追加する
  function padString(str: string): string {
    const max = 23;
    if (str.length < max) {
      for (let i = 0; i < max - str.length; i++) {
        str += '　';
      }
    }
    return str;
  }

  return (
    <ScrollArea.Root
      type="hover"
      className="ScrollAreaRoot"
      style={{ height: window.innerHeight }}
    >
      <ScrollArea.Viewport className="ScrollAreaViewport">
        <Flex gap="0" direction="column">
          {menuItems.map((item, i) => (
            <Box key={i}>
              <Button
                variant="ghost"
                size="2"
                radius="full"
                onClick={() => {
                  router.push(item.path);
                  setOpen(false);
                }}
                style={{ padding: '10px 10px', margin: '10px 0' }}
              >
                <Text>{padString(item.text)}</Text>
              </Button>
              <SelectSeparator style={{ margin: '0' }} />
            </Box>
          ))}
        </Flex>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};
