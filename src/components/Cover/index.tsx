import React from 'react';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { useStyles, ListItem } from './styles';

interface CoverProps {
  title: string;
  source: string;
}

const Cover: React.FC<CoverProps> = ({ title, source }) => {
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

export default Cover;
