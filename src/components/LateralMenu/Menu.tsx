import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemLink from './ListItemLink';
import { useStyles } from './styles';
import { getBaseUrl } from '../../utils/urlUtils';
import { tags, getTagPath } from '@/services/TagServices';

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const baseUrl = getBaseUrl();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItemLink href={`/${baseUrl}`}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Início" />
      </ListItemLink>
      <ListItem
        button
        onClick={handleClick}
        {...(open ? { className: classes.nestTitle } : {})}
      >
        <ListItemIcon>
          <FolderIcon color={open ? 'primary' : 'inherit'} />
        </ListItemIcon>
        <ListItemText primary="Categorias" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {tags.sort().map((tag) => {
            const tagPath = (baseUrl ? `/${baseUrl}` : '') + getTagPath(tag);

            return (
              <ListItemLink href={tagPath} className={classes.nested} key={tag}>
                <ListItemText primary={tag} />
              </ListItemLink>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default Menu;
