import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { lightTheme, darkTheme } from './styles';
import './Layout.css';
import AppBar from '../AppBar';
import LateralMenu from '../LateralMenu';

interface LayoutProps {
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState(lightTheme);

  const toggleDrawer = (isOpen: boolean): void => {
    setOpen(isOpen);
  };

  const onThemeChange = (newTheme: 'light' | 'dark'): void => {
    setTheme(newTheme === 'light' ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        pageTitle={pageTitle || 'Komorebi'}
        toggleDrawer={toggleDrawer}
        onThemeChange={onThemeChange}
      />
      <LateralMenu open={open} toggleDrawer={toggleDrawer} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
