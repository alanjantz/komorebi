import React from 'react';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AlarmIcon from '@material-ui/icons/Alarm';
import { getBaseUrl } from '../../utils/urlUtils';
import { getCompleteTagPath } from '@/services/TagServices';
import CategoryList from './CategoryList';
import ListItem from './LisItem';

const Menu: React.FC = () => {
  const baseUrl = getBaseUrl();

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItem href={`/${baseUrl}`} icon={<HomeIcon />} title="Início" />
      <ListItem
        href={getCompleteTagPath(baseUrl, 'Recomendo')}
        icon={<StarIcon />}
        title="Recomendos"
      />
      <CategoryList />
      <ListItem
        href={getCompleteTagPath(baseUrl, 'Assistido')}
        icon={<AlarmOnIcon />}
        title="Assistidos"
      />
      <ListItem
        href={getCompleteTagPath(baseUrl, 'Assistindo')}
        icon={<AlarmIcon />}
        title="Assistindo no momento"
      />
    </List>
  );
};

export default Menu;
