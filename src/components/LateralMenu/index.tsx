import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import Profile from '../Profile';

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
  </SwipeableDrawer>
);

export default LateralMenu;
