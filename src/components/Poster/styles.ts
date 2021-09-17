import styled from 'styled-components';
import { createStyles, makeStyles, withTheme } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    title: {
      color: 'white',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      zIndex: 10,
    },
  }),
);

export const ListItem = withTheme(styled.div`
  .MuiImageListItem-item {
    width: 300px;
    height: 450px;

    @media only screen and (max-width: 650px) {
      width: 160px;
      height: 240px;
    }
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
`);
