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
  h2 {
    text-align: center;
    margin-top: 0;
  }
  h2:last-child {
    margin-top: 24px;
  }
  .mobile-map {
    display: inline
  }
  .desktop-map {
    display: none;
  }
  @media (min-width: 700px){
    .mobile-map {
      display: none;
    }
    .desktop-map {
      display: inline;
    }
  }
`;
