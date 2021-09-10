import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
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
