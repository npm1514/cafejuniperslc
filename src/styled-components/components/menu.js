import styled from 'styled-components';
import { white, green, darkblue } from '../colors';
export const MenuWrap = styled.div`
  width: 100%;
  background-color: ${white};
`;
export const Menu = styled.div`
  width: calc(100% - 64px);
  background-color: ${white};
  color: ${green};
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 736px;
  margin: auto;
  tr th:first-child {
    text-align: left;
    padding-left: 0;
  }
  tr td:first-child {
    text-align: left;
    padding-left: 0;
  }
  tr th:last-child {
    padding-right: 0;
  }
  tr td:last-child {
    padding-right: 0;
  }
  th {
    text-align: right;
    color: ${darkblue};
    padding: 0 12px;
    font-size: 32px;
  }
  td {
    text-align: right;
    color: ${green};
    padding: 0 12px;
    font-size: 32px;
  }
  sup {
    font-size: 12px;
  }
`;
export const MenuLeft = styled.div`
  width: 100%;
  @media(min-width: 700px){
      width: 60%;
  }
`;
export const MenuRight = styled.div`
  width: 100%;
  display: flex;
      justify-content: flex-end;
  @media(min-width: 700px){
      width: 40%;
  }
`;
