import styled from 'styled-components';
import { makeStyles, withTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  icon: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    boxShadow: theme.shadows[12],
    margin: `${theme.spacing(2)}px auto`,
    border: '5px solid white',
  },
}));

export const Container = withTheme(styled.div`
  width: ${(props) => props.theme.spacing(40)}px;
  text-align: center;

  h2 {
    color: white;
  }
`);

export const Background = withTheme(styled.div`
  width: 100%;
  display: block;
  padding: ${(props) => props.theme.spacing(2)}px 0;
  background: ${(props) => props.theme.palette.primary.main};
  box-shadow: ${(props) => props.theme.shadows[3]};
`);
