import styled from 'styled-components';
import { createStyles, withStyles } from '@material-ui/styles';
import {
  makeStyles,
  TableCell as MaterialTableCell,
  TableRow,
  Tooltip as MaterialTooltip,
} from '@material-ui/core';
import { theme } from '../Layout';

export const TableCell = withStyles(() =>
  createStyles({
    root: {
      padding: 10,
    },
    head: {},
    body: {},
  }),
)(MaterialTableCell);

export const StyledTableCell = withStyles(() =>
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
  }),
);

export const Container = styled.div`
  margin-top: 10px;
`;

export const Tooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#333333',
    fontStyle: 'normal',
    lineHeight: '14px',
    textAlign: 'center',
    fontSize: '12px !important',
    letterSpacing: '0.4px',
    fontColor: '#F2F2F2',
  },
  arrow: {
    '&::before': {
      color: '#333333',
    },
  },
}))(MaterialTooltip);
