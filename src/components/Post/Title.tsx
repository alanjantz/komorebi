import Typography from '@material-ui/core/Typography';
import React from 'react';

const Title: React.FC = ({ children }) => (
  <Typography variant="h5" component="h2">
    {children}
  </Typography>
);

export default Title;
