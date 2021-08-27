import React from 'react';
import MaterialAppBar from '@material-ui/core/AppBar';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface AppBarProps {
  pageTitle: string;
  toggleDrawer: (isOpen: boolean) => void;
}

const AppBar: React.FC<AppBarProps> = ({ pageTitle, toggleDrawer }) => (
  <MaterialAppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">{pageTitle}</Typography>
    </Toolbar>
  </MaterialAppBar>
);

export default AppBar;
