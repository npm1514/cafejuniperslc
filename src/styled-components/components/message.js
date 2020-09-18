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
  text-align: center;
  h1 {
    color: ${white}
  }
`;
export const TextBox = styled.div`
  width: 80%;
  margin: auto;
  background-color: ${darkblue};
  position: relative;
  textarea {
    width: 100%;
    height: 200px;
  }
`;
