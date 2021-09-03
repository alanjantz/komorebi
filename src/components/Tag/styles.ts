import { createStyles, makeStyles } from '@material-ui/styles';
import { theme } from '../Layout';

export const useStyles = makeStyles(() =>
  createStyles({
    margin: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);
