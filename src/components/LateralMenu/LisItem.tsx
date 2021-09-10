import React from 'react';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import ListItemLink from './ListItemLink';

interface ListItemProps {
  href: string;
  title: string;
  icon: React.ReactElement;
}

const ListItem: React.FC<ListItemProps> = ({ href, title, icon }) => (
  <ListItemLink href={href}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={title} />
  </ListItemLink>
);

export default ListItem;
