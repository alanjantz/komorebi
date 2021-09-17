import React from 'react';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import config from '../../../data/config';
import { useStyles, Background, Container } from './styles';

const Profile: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Background>
        <Avatar
          src="https://i.imgur.com/gKCy0rO.jpg"
          alt={config.siteTitle}
          className={classes.icon}
        />
        <Typography variant="h6" component="h2">
          {config.siteTitle}
        </Typography>
      </Background>
    </Container>
  );
};

export default Profile;
