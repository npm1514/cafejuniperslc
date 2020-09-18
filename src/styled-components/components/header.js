import styled from 'styled-components';
import {darkblue, white, lightblue, pink} from '../colors';
export const HeaderWrap = styled.div`
  width: 100%;
  background-color: ${darkblue};
`;
export const Header = styled.header`
  width: 100%;
  max-width: 732px;
  margin: auto;
  background-color: ${darkblue};
  height: 40px;
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: block;
    /* width: 20%; */
    text-decoration: none;
    text-align: center;
    font-size: 24px;
    color: ${white};
    /* margin: 0 12px; */
  }
  .online-order {
    color: ${pink}
  }
  a:hover {
    color: ${lightblue};
  }
`;
