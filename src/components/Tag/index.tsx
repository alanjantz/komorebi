import React from 'react';
import { Link } from 'gatsby';
import Chip from '@material-ui/core/Chip';
import { PropTypes } from '@material-ui/core';
import { getTagPath, getTagIcon } from '../../services/TagServices';
import { useStyles } from './styles';

interface TagProps {
  text: string;
  size: 'small' | 'medium';
  color?: Exclude<PropTypes.Color, 'inherit'>;
  clickable?: boolean;
  noMargin?: boolean;
}

const Tag: React.FC<TagProps> = ({
  text,
  size,
  clickable = true,
  noMargin,
  color = 'secondary',
}) => {
  const classes = useStyles();

  const onClick = (): void => {
    // nada acontece feijoada
  };

  const component = (
    <Chip
      size={size}
      label={text}
      color={color}
      onClick={clickable ? onClick : undefined}
      className={noMargin ? '' : classes.margin}
      icon={getTagIcon(text)}
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
