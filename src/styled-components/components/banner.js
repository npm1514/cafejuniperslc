import styled from 'styled-components';
import { white } from '../colors';

export const BannerWrap = styled.div`
  width: 100%;
  background-color: ${white};
  height: 0;
  overflow: hidden;
  @media (min-width: 700px){
    height: 300px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  display: none;
  background-color: ${white};
  position: relative;
  max-width: 800px;
  margin: auto;
  height: 300px;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
  }
  @media (min-width: 700px){
    display: flex;
  }
`;
