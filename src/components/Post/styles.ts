import { createStyles, withStyles } from '@material-ui/styles';
import {
  makeStyles,
  TableCell as MaterialTableCell,
  TableRow,
} from '@material-ui/core';
import { theme } from '../Layout';

export const TableCell = withStyles(() =>
  createStyles({
    root: {
      padding: 10,
    },
  }),
)(MaterialTableCell);

export const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

export const StyledTableRow = withStyles(() =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:last-child td': {
        borderBottom: 'none',
      },
    },
  }),
)(TableRow);

export const useStyles = makeStyles(() =>
  createStyles({
    margin: {
      marginRight: theme.spacing(1),
    },
    root: {
      margin: 15,
    },
    media: {
      height: 250,
    },
    actions: {
      float: 'right',
    },
    pos: {
      marginBottom: 12,
    },
  }),
);
