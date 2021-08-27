import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

export interface LayoutProps {
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const anchor = 'left';

  const theme = createTheme({
    palette: {
      primary: {
        main: '#171e28',
      },
      secondary: {
        main: '#f58d1e',
      },
      background: {
        default: '#eff1f4',
      },
    },
  });

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(isOpen);
    };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{pageTitle || 'Komorebi'}</Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        Olá
      </SwipeableDrawer>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
