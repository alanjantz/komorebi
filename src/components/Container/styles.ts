import styled from 'styled-components';
import { withTheme } from '@material-ui/styles';

export const Container = withTheme(styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 1050px) {
    padding-bottom: ${(props) => props.theme.spacing(5)}px;
  }
`);
