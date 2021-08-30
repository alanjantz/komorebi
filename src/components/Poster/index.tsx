import React from 'react';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { useStyles, ListItem } from './styles';

interface PosterProps {
  title: string;
  source: string;
}

const Poster: React.FC<PosterProps> = ({ title, source }) => {
  const classes = useStyles();

  return (
    <ImageListItem key={source} component={ListItem}>
      <img src={source} alt={title} />
      <ImageListItemBar
        title={title}
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
      />
    </ImageListItem>
  );
};

export default Poster;
