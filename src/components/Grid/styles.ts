import styled from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 15,
    },
  }),
);

export const ActionGroup = styled.div`
  position: absolute;
  width: 300px;
  text-align: right;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 650px) {
    width: 160px;
  }
`;

export const IconBox = styled.div`
  display: inline-block;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.5) 10%,
    transparent 60%
  );
  -webkit-border-top-right-radius: 9px;
  -moz-border-radius-topright: 9px;
  border-top-right-radius: 9px;
`;
