import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import Chip from '@material-ui/core/Chip';
import { useStyles } from './styles';

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
    <Link
      key={text}
      to={`/tag/${_.kebabCase(text)}`}
      className={classes.margin}
    >
      <Chip size={size} label={text} color="primary" onClick={onClick} />
    </Link>
  );
};

export default Tag;
