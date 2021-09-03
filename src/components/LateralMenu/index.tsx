import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import Profile from '../Profile';
import Menu from './Menu';

interface LateralMenuProps {
  open: boolean;
  toggleDrawer(isOpen: boolean): void;
}

const LateralMenu: React.FC<LateralMenuProps> = ({ open, toggleDrawer }) => (
  <SwipeableDrawer
    anchor="left"
    open={open}
    onClose={() => toggleDrawer(false)}
    onOpen={() => toggleDrawer(true)}
  >
    <Profile />
    <Menu />
  </SwipeableDrawer>
);

export default LateralMenu;
