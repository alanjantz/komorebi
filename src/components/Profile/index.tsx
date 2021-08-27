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
import { Background, Container, Icon, useStyles } from './styles';
import ListItemLink from '../LateralMenu/ListItemLink';

const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Background />
      <Icon />
      <h2>@alanjanzu</h2>

      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemLink href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Início" />
        </ListItemLink>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Categorias" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemLink href="#" className={classes.nested}>
              <ListItemText primary="Starred" />
            </ListItemLink>
          </List>
        </Collapse>
      </List>
    </Container>
  );
};

export default Profile;
