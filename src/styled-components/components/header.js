import styled from 'styled-components';
import {darkblue, white, lightblue, pink, green} from '../colors';

export const HeaderWrap = styled.div`
  width: 100%;
  background-color: ${darkblue};
`;
export const DesktopHeader = styled.header`
  width: 100%;
  max-width: 732px;
  margin: auto;
  background-color: ${darkblue};
  height: 40px;
  color: ${white};
  display: none;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    text-align: center;
    font-size: 24px;
    color: ${white};
    margin: 0 12px;
  }
  .online-order {
    color: ${pink}
  }
  a:hover {
    color: ${lightblue};
  }
  @media(min-width: 700px){
    display: flex;
  }
`;
export const MobileHeader = styled.header`
  width: 100%;
  max-width: 732px;
  margin: auto;
  background-color: ${darkblue};

  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: calc(60% - 48px);
    margin: 24px;
  }

  @media (min-width: 700px){
    display: none;
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  max-width: 732px;
  margin: auto;
  background-color: ${green};
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    width: 50%;
    text-align: center;
    a {
      text-decoration: none;
      text-align: center;
      font-size: 24px;
      color: ${white};
      margin: auto;
    }
  }
  .online-order {
    color: ${darkblue};
    width: 100%;
    padding: 8px 0;
    background-color: ${pink};
  }
  a:hover {
    color: ${lightblue};
  }
  @media(min-width: 700px){
    display: none;
  }
`;

export const HexLock = styled.div`
  width: calc(40% - 24px);
  margin: 12px;
  height: 100%;
  position: relative;
`;
