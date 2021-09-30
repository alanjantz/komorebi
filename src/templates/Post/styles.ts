import { withTheme } from '@material-ui/styles';
import styled from 'styled-components';

export const Actions = withTheme(styled.div`
  margin: ${(props) => props.theme.spacing(2)}px;
  text-align: center;
`);
