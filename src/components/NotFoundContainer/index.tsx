import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container, Image, useStyles } from './styles';
import { getBaseUrl } from '@/utils/urlUtils';

const NotFoundContainer: React.FC = () => {
  const baseUrl = `/${getBaseUrl()}`;
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Image />
          <Paper className={classes.paper}>
            <Typography variant="h4" className={classes.title}>
              <b>Hey</b>, parece que não tem nada aqui
            </Typography>
            <Button variant="contained" color="primary" href={baseUrl}>
              Página Inicial
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFoundContainer;
