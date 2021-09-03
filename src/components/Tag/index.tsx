import React from 'react';
import { Link } from 'gatsby';
import Chip from '@material-ui/core/Chip';
import { useStyles } from './styles';
import { getTagPath } from '@/services/TagServices';

interface TagProps {
  text: string;
  size: 'small' | 'medium';
}

const Tag: React.FC<TagProps> = ({ text, size }) => {
  const classes = useStyles();

  const onClick = (): void => {
    // nada acontece feijoada
  };

  return (
    <Link key={text} to={getTagPath(text, '/')}>
      <Chip
        size={size}
        label={text}
        color="primary"
        onClick={onClick}
        className={classes.margin}
      />
    </Link>
  );
};

export default Tag;
