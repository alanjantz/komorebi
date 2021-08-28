import styled from 'styled-components';
import MaterialPaper from '@material-ui/core/Paper';

export const Paper = styled(MaterialPaper)`
  margin: 15px 0;
  padding: 5px 15px;

  @media only screen and (max-width: 1000px) {
    margin: 15px;
  }
`;
