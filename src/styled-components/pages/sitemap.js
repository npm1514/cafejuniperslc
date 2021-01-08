import styled from 'styled-components';
import { darkblue, lightblue } from '../colors';

export const SitemapContent = styled.div`
  width: 100%;
  text-align: center;
  a {
    color: ${darkblue};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a:hover {
    color: ${lightblue};
    transition: color 0.5s;
  }
  a:visited {
    color: ${darkblue};
  }
`;
