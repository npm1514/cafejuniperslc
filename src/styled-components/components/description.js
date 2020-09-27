import styled from 'styled-components';
import { brown, white, darkblue } from '../colors';
export const DescriptionWrap = styled.div`
  width: 100%;
  background-color: ${brown};
`;
export const Description = styled.div`
  width: calc(100% - 48px);
  background-color: ${brown};
  color: ${white};
  padding: 24px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 736px;
  margin: auto;
`;
export const DescriptionLeft = styled.div`
  display: none;
  img {
    width: 150px;
  }
  @media screen and (min-width: 700px){
      width: 30%;
      display: block;
  }
`;
export const DescriptionRight = styled.div`
  width: 100%;
  h1 {
    color: ${darkblue}
  }
  @media screen and (min-width: 700px){
      width: 70%;
  }
`;
