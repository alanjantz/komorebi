import _ from 'lodash';

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
