'use client';

import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';

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

  return (
    <>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {menuItems.map(({ text, path }, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => router.push(path)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
