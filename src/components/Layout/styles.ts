import {
  createStyles,
  createTheme,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const font = "'Roboto', sans-serif";

export const defaultTheme = createTheme({
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily: font,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '*::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  ...defaultTheme,
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
});

export const darkTheme = createTheme({
  ...defaultTheme,
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
});

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 10,
    },
  }),
);
