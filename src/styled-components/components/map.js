import styled from 'styled-components';
import {lightblue} from '../colors';

export const MapWrap = styled.div`
  width: 100%;
  background-color: ${lightblue};
  padding: 24px 0;
`;

export const Map = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  text-align: center;
  position: relative;
  background-color: ${lightblue};
  h1 {
    text-align: center;
    margin-top: 0;
  }
`;
