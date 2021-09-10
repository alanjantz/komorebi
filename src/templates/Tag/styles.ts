import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

export const Title = withTheme(styled.div`
  margin: ${(props) => props.theme.spacing(2)}px;
  text-align: center;
`);

export const Subtitle = withTheme(styled.div`
  margin: ${(props) => props.theme.spacing(2)}px;
`);
