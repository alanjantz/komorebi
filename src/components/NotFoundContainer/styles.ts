import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const Container = styled.div``;

export const Image = styled.div`
  width: 350px;
  display: block;
  height: 320px;
  background: url('https://i.imgur.com/hyCyplw.png') no-repeat;
`;

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
      },
      container: {
        marginTop: theme.spacing(5),
      },
      title: {
        marginBottom: theme.spacing(2),
      },
    }),
  { index: 1 },
);
