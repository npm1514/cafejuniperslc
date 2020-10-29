import styled from 'styled-components';
import { darkblue, white } from '../colors';

export const MessageWrap = styled.div`
  width: 100%;
  background-color: ${darkblue};
  padding-bottom: 24px;
`;

export const Message = styled.div`
  width: 100%;
  background-color: ${darkblue};
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
  }
`;
