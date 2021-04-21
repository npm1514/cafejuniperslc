import styled from 'styled-components';
import { brown, white, darkblue } from '../colors';
export const AboutWrap = styled.div`
  width: 100%;
  background-color: ${brown};
  position: relative;
  a {
    color: #ffffff90;
    transition: color 0.5s;
  }
  a:hover {
    color: #fff;
  }
  h4 {
    margin: 12px 0;
  }
  h2 {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
  h2:hover {
    opacity: 1;
  }
`;
export const AboutID = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -159px;
  @media(min-width: 700px){
    top: -74px;
  }
`;
export const About = styled.div`
  width: calc(100% - 64px);
  background-color: ${brown};
  color: #fff;
  padding: 32px;
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  max-width: 736px;
  margin: auto;
  @media (min-width: 700px) {
    overflow: visible;
  }
`;
export const AboutLeft = styled.div`
  display: none;
  img {
    width: 150px;
  }
  @media (min-width: 700px){
      width: 30%;
      display: block;
  }
`;
export const AboutRight = styled.div`
  width: 100%;
  h2 {
    color: ${darkblue}
  }
  @media (min-width: 700px){
      width: 70%;
  }
`;
