import styled from 'styled-components';
import {darkblue, white} from '../colors';

export const Footer = styled.footer`
  width: calc(100% - 32px);
  background-color: ${darkblue};
  color: ${white};
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  span {
    line-height: 0.85;
  }
  i {
    margin-left: 8px;
  }
  a:visited {
    color: ${white};
  }
`;
