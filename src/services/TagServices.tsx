import React from 'react';
import _ from 'lodash';
import StarIcon from '@material-ui/icons/Star';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AlarmIcon from '@material-ui/icons/Alarm';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TheatersIcon from '@material-ui/icons/Theaters';

export const tags: string[] = [
  'Aventura',
  'Ação',
  'Boys Love',
  'Comédia',
  'Cyberpunk',
  'Drama',
  'Ecchi',
  'Escolar',
  'Esporte',
  'Fantasia',
  'Filme',
  'Harem',
  'Histórico',
  'Horror',
  'Jogo',
  'Josei',
  'Magia',
  'Mecha',
  'Militar',
  'Mistério',
  'Música',
  'Paródia',
  'Policial',
  'Pós-apocalíptico',
  'Romance',
  'Sci-Fi',
  'Seinei',
  'Shoujo',
  'Shounen',
  'Slice of Life',
  'Sobrenatural',
  'Superpoderes',
  'Thriller',
  'Vampiros',
  'Zumbi',
];

export const getTagPath = (tag: string): string => `/tag/${_.kebabCase(tag)}`;

export const getCompleteTagPath = (baseUrl: string, tag: string): string =>
  (baseUrl ? `/${baseUrl}` : '') + getTagPath(tag);

export const getTagIcon = (tag: string): React.ReactElement | undefined => {
  switch (tag) {
    case 'Favorito':
      return <FavoriteIcon />;
    case 'Recomendo':
      return <StarIcon />;
    case 'Assistido':
      return <AlarmOnIcon />;
    case 'Assistindo':
      return <AlarmIcon />;
    case 'Filme':
      return <TheatersIcon />;
    default:
      return undefined;
  }
};
