import styled from 'styled-components';
import { white, darkblue } from '../colors';

export const Partners = styled.div`
  width: 100%;
  max-width: 732px;
  margin: auto;
  h2, p {
    text-align: center;
    color: ${darkblue};
  }
`;

export const PartnerList = styled.div`
  display: flex;
  padding: 32px;
  width: calc(100% - 64px);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  img {
    max-width: 150px;
    margin: 16px 24px;
  }
`;
