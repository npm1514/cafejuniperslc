import styled from 'styled-components';
import { darkblue, white, green, lightblue } from '../colors';

export const SubscribeWrap = styled.div`
  width: 100%;
  background-color: ${green};
  padding-bottom: 24px;
  position: relative;
`;

export const Subscribe = styled.div`
  width: 100%;
  background-color: ${green};
  max-width: 800px;
  margin: auto;
  padding-top: 24px;
  position: relative;
  text-align: center;
  h2 {
    color: ${white}
  }
  textarea, input {
    font-family: diazo-mvb-ex-cond, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    padding: 8px;
  }
  textarea {
    height: 200px;
    width: 80%;
  }
  input {
    height: 50px;
    width: 80%;
  }
  table {
    margin: auto;
    width: 80%;
    th, td {
      background-color: ${white};
      border: 1px solid ${darkblue};
      padding: 4px 8px;
      text-align: center;
    }
  }
  .deleter:hover {
    cursor: pointer;
    color: ${lightblue};
  }
`;
export const TextBox = styled.button`
  width: 80%;
  height: 0;
  padding: 0;
  border: 0;
  margin: auto;
  background-color: ${darkblue};
  position: relative;
  #airplane:hover {
    fill: ${darkblue};
    cursor: pointer;
    transition: fill 0.5s;
  }
`;
