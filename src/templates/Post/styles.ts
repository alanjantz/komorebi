import styled from 'styled-components';
import { createStyles, makeStyles, withTheme } from '@material-ui/styles';

export const Actions = withTheme(styled.div`
  margin: ${(props) => props.theme.spacing(2)}px;
  text-align: center;
`);

export const useStyles = makeStyles(() =>
  createStyles({
    alignLeft: {
      float: 'left',
    },
    alignRight: {
      float: 'right',
    },
  }),
);
