import styled from 'styled-components';
import { createStyles, withStyles } from '@material-ui/styles';
import {
  makeStyles,
  TableCell as MaterialTableCell,
  TableRow,
  Theme,
} from '@material-ui/core';

export const TableCell = withStyles(() =>
  createStyles({
    root: {
      padding: 10,
    },
    head: {},
    body: {},
  }),
)(MaterialTableCell);

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: 700,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:last-child td': {
        borderBottom: 'none',
      },
      height: '45px',
    },
  }),
)(TableRow);

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 15,
    },
    media: {
      height: 250,
    },
    subtitle: {
      marginBottom: 12,
    },
    actions: {
      float: 'right',
    },
    firstColumn: {
      width: 40,
      textAlign: 'center',
    },
    check: {
      float: 'right',
      color: theme.palette.success.main,
    },
  }),
);

export const Container = styled.div`
  margin-top: 10px;
`;
