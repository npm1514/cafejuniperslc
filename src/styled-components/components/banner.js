import styled from 'styled-components';
import { white } from '../colors';

export const BannerWrap = styled.div`
  width: 100%;
  background-color: ${white};
  height: 300px;
  overflow: hidden;
`;

export const Banner = styled.div`
  width: 100%;
  background-color: ${white};
  position: relative;
  max-width: 800px;
  margin: auto;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
  }
`;
