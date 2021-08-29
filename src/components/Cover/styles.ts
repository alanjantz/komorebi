import { createStyles, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: 'white',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

export const ListItem = styled.div`
  .MuiImageListItem-item {
    width: 300px;
    height: 450px;

    @media only screen and (max-width: 650px) {
      width: 200px;
      height: 300px;
    }
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
`;
