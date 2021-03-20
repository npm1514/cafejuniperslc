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
  width: calc(100% - 64px);
  background-color: ${white};
  color: ${green};
  padding: 32px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 762px;
  margin: auto;
  tr th:first-child {
    text-align: left;
    padding: 0;
    width: 170px;

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
      width: 172px;
    }
    th, td {
      font-size: 18px;
    }
  }
  @media (min-width: 800px){
    th, td {
      font-size: 28px;
    }
  }
`;
export const CoffeeMenuLeft = styled.div`
  width: 100%;
  table {
    margin: auto;
  }
  @media (min-width: 700px){
      width: 100%;
      table {
        margin: 12px 24px;
      }
  }
`;
export const CoffeeMenuRight = styled.div`
  width: 100%;
  margin: 24px auto;
  table {
    margin: auto;
  }
  @media (min-width: 700px){
    margin-top: 0;
    width: 40%;
    table {
      margin: 12px 24px;
    }
  }
`;
