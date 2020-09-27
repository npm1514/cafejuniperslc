import styled from 'styled-components';
import { white, lightblue } from '../colors';

export const Partners = styled.div`
  width: 100%;
  max-width: 732px;
  margin: auto;
  h1, p {
    text-align: center;
    color: ${lightblue};
  }
`;

export const PartnerList = styled.div`
  width: 100%;
  display: flex;
  margin: 24px 0;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  img {
    max-width: 150px;
    margin: 16px 24px;
  }
`;
