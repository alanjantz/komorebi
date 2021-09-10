import React from 'react';
import { Link } from 'gatsby';
import Chip from '@material-ui/core/Chip';
import { useStyles } from './styles';
import { getTagPath } from '../../services/TagServices';

interface TagProps {
  text: string;
  size: 'small' | 'medium';
  clickable?: boolean;
}

const Tag: React.FC<TagProps> = ({ text, size, clickable = true }) => {
  const classes = useStyles();

  const onClick = (): void => {
    // nada acontece feijoada
  };

  const component = (
    <Chip
      size={size}
      label={text}
      color="secondary"
      onClick={clickable ? onClick : undefined}
      className={classes.margin}
    />
  );

  if (clickable) {
    return (
      <Link key={text} to={getTagPath(text)}>
        {component}
      </Link>
    );
  }

  return component;
};

export default Tag;
