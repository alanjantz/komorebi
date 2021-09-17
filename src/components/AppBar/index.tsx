import React, { useCallback, useEffect, useState } from 'react';
import MaterialAppBar from '@material-ui/core/AppBar';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness7';
import storage from '../../utils/localStorageUtils';
import { useStyles } from './styles';

interface AppBarProps {
  pageTitle: string;
  toggleDrawer: (isOpen: boolean) => void;
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const AppBar: React.FC<AppBarProps> = ({
  pageTitle,
  toggleDrawer,
  onThemeChange,
}) => {
  const classes = useStyles();
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  useEffect(() => {
    const isLight = storage.getTheme() !== 'dark';
    setIsLightTheme(isLight);
    onThemeChange(isLight ? 'light' : 'dark');
  }, []);

  const changeThemeColor = useCallback(() => {
    const newTheme = isLightTheme ? 'dark' : 'light';
    onThemeChange(newTheme);
    storage.setTheme(newTheme);
    setIsLightTheme((value) => !value);
  }, [isLightTheme]);

  return (
    <MaterialAppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {pageTitle}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={changeThemeColor}
        >
          {isLightTheme ? <DarkIcon /> : <LightIcon />}
        </IconButton>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
