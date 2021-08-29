import styled from 'styled-components';
import MaterialPaper from '@material-ui/core/Paper';
import { createStyles, withStyles } from '@material-ui/styles';
import { TableCell as MaterialTableCell, TableRow } from '@material-ui/core';
import { theme } from '../Layout/styles';

export const Paper = styled(MaterialPaper)`
  margin: 15px 0;
  padding: 15px;

  @media only screen and (max-width: 1000px) {
    margin: 15px;
  }
`;

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
