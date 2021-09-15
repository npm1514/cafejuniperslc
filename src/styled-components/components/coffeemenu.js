import styled from 'styled-components';
import { white, green, darkblue } from '../colors';
export const CoffeeMenuWrap = styled.div`
  width: 100%;
  background-color: ${white};
  h2 {
    color: ${darkblue};
  }
`;
export const CoffeeMenu = styled.div`
  width: 100%;
  background-color: ${white};
  color: ${green};
  overflow: hidden;
  position: relative;
  max-width: 600px;
  margin: auto;
  sup {
    font-size: 12px;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 700px){
    .mobile-menu-header {
      display: none;
    }
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Head = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: ${darkblue};
`;

export const Data = styled.div`
  color: ${green};
  font-size: 28px;
`;
