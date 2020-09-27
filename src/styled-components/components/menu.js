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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 736px;
  margin: auto;
  tr th:first-child {
    text-align: left;
    padding: 0;
    width: 84px;
  }
  tr td:first-child {
    text-align: left;
    padding: 0;
  }
  th {
    text-align: right;
    color: ${darkblue};
    padding: 0 12px;
    min-width: 30px;
  }
  td {
    text-align: right;
    color: ${green};
    padding: 0 12px;
  }
  sup {
    font-size: 12px;
  }
  @media (min-width: 700px){
    flex-direction: row;
    .mobile-menu-header {
      display: none;
    }
    tr th:last-child {
      padding-right: 0;
    }
    tr td:last-child {
      padding-right: 0;
    }
    tr th:first-child {
      text-align: left;
      padding-left: 0;
      width: 167px;
    }
  }
  @media (min-device-width: 700px){
    flex-direction: row;
    .mobile-menu-header {
      display: none;
    }
    tr th:last-child {
      padding-right: 0;
    }
    tr td:last-child {
      padding-right: 0;
    }
    tr th:first-child {
      text-align: left;
      padding-left: 0;
      width: 167px;
    }
  }
`;
export const MenuLeft = styled.div`
  width: 100%;
  table {
    margin: auto;
  }
  @media (min-width: 700px){
      width: 60%;
  }
  @media (min-device-width: 700px){
      width: 60%;
  }
`;
export const MenuRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
  table {
    margin: auto;
  }
  @media (min-width: 700px){
    margin-top: 0;
    justify-content: flex-end;
    width: 40%;
  }
  @media (min-device-width: 700px){
    margin-top: 0;
    justify-content: flex-end;
    width: 40%;
  }
`;
