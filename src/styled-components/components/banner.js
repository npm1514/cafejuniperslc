import styled from 'styled-components';
import { white, brown } from '../colors';

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
  flex-direction: column;
  img {
    width: 130px;
  }
  h1 {
    color: ${brown};
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 1;
    margin: 22px 0 0 0;
    span:first-child {
      line-height: 0.5;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    .bottomBanner {
      font-size: 24px;
      margin-top: 12px;
      display: block;
    }
    .smallLetters {
      font-size: 33px;
    }
  }
  @media (min-width: 700px){
    display: flex;
  }
`;
