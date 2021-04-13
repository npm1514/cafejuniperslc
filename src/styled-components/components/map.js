import styled from 'styled-components';
import {lightblue} from '../colors';

export const MapWrap = styled.div`
  width: 100%;
  background-color: ${lightblue};
  position: relative;
`;
export const MapID = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -159px;
  @media(min-width: 700px){
    top: -74px;
  }
`;
export const Map = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 32px 0;
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
    width: calc(100% - 64px);
    padding: 32px;
    .mobile-map {
      display: none;
    }
    .desktop-map {
      display: inline;
    }
  }
`;
