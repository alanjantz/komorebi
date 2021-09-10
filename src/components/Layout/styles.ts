import { createTheme } from '@material-ui/core/styles';

const font = "'Roboto', sans-serif";

const primaryColor = '#171e28';
const secondaryColor = '#f58d1e';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: '#eff1f4',
    },
  },
  typography: {
    fontFamily: font,
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: '#16161c',
    },
  },
  typography: {
    fontFamily: font,
  },
});
