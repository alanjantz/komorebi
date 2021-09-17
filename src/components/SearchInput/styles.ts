import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import MaterialTextField from '@material-ui/core/TextField';

export const SearchContainer = withTheme(styled.div`
  margin: ${(props) => props.theme.spacing(2)}px;
  text-align: center;
`);

export const TextField = withTheme(
  styled(MaterialTextField)(({ theme }) => ({
    '& label.Mui-focused': {
      color: theme.palette.text.primary,
    },
  })),
);
