import { createTheme } from '@material-ui/core/styles';

const font = "'Roboto', sans-serif";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#171e28',
    },
    secondary: {
      main: '#f58d1e',
    },
    background: {
      default: '#eff1f4',
    },
  },
  typography: {
    fontFamily: font,
  },
});
