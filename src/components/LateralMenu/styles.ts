import { createStyles, makeStyles } from '@material-ui/core/styles';
import { theme } from '../Layout';

export const useStyles = makeStyles(() =>
  createStyles({
    nestTitle: {
      background: theme.palette.action.selected,
    },
    nested: {
      paddingLeft: theme.spacing(9),
      background: theme.palette.divider,
    },
  }),
);
