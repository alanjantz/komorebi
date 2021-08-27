import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';

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
    Olá
  </SwipeableDrawer>
);

export default LateralMenu;
