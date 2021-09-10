import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);
