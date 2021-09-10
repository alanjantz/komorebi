import React from 'react';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ListItemLink from './ListItemLink';
import { getBaseUrl } from '../../utils/urlUtils';
import CategoryList from './CategoryList';

const Menu: React.FC = () => {
  const baseUrl = getBaseUrl();

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItemLink href={`/${baseUrl}`}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Início" />
      </ListItemLink>
      <CategoryList baseUrl={baseUrl} />
    </List>
  );
};

export default Menu;
