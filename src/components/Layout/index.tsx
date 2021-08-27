import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles';
import './Layout.css';
import AppBar from '../AppBar';
import LateralMenu from '../LateralMenu';

interface LayoutProps {
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (isOpen: boolean): void => {
    setOpen(isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar pageTitle={pageTitle || 'Komorebi'} toggleDrawer={toggleDrawer} />
      <LateralMenu open={open} toggleDrawer={toggleDrawer} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
