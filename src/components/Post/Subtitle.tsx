import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './styles';

const Subtitle: React.FC = ({ children }) => {
  const classes = useStyles();

  if (!children) {
    return <></>;
  }

  return (
    <Typography className={classes.subtitle} color="textSecondary">
      {children}
    </Typography>
  );
};

export default Subtitle;
