import { createStyles, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { theme } from '../Layout/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(9),
    },
  }),
);

export { useStyles };

export const Container = styled.div`
  width: 350px;
  text-align: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 64px;
  background: ${theme.palette.primary.main};
`;

export const Icon = styled.div`
  width: 100px;
  height: 100px;
  background: url('https://i.imgur.com/gKCy0rO.jpg');
  background-size: cover;
  border: 5px solid white;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  margin: 0 auto;
  margin-top: -50px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 16%), 0 2px 5px 0 rgb(0 0 0 / 26%);
`;
