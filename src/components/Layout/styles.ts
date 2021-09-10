import { createTheme } from '@material-ui/core/styles';

const font = "'Roboto', sans-serif";

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#171e28',
    },
    secondary: {
      main: '#242f3e',
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
      main: '#242f3e',
    },
    secondary: {
      main: '#171e28',
    },
    background: {
      default: '#1F2021',
    },
  },
  typography: {
    fontFamily: font,
  },
});
