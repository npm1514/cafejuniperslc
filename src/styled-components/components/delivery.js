import styled from 'styled-components';
import { brown, white, darkblue } from '../colors';
export const DeliveryWrap = styled.div`
  width: 100%;
  background-color: ${brown};
  position: relative;
`;
export const OrderID = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -159px;
  @media(min-width: 700px){
    top: -74px;
  }
`;
export const Delivery = styled.div`
  width: calc(100% - 64px);
  background-color: ${brown};
  color: #fff;
  padding: 32px;
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 736px;
  margin: auto;
  hr {
    width: 100%;
  }
  p {
    margin-top: 0;
  }
  .ddButton {
    position: relative;
    width: 289px;
    height: 59px;
    margin: 0px auto;
    background-image: url("https://cdn.doordash.com/media/button/button_red_l.svg");
    color: transparent;
  }
  .orderTitle {
    font-size: 32px;
    padding: 12px;
    border-top: 1px solid #fff;
    width: 100%;
    border-bottom: 1px solid #fff;
    text-align: center;
    margin: 0;
  }
  .ddButton:hover {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
  .ghButton:hover {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
  svg {
    .st0{
      fill:#5A5A5A;
    }
    .st1{
      fill:#228800;
    }
  }
  @media (min-width: 700px) {
    overflow: visible;
    .orderTitle {
      font-size: 48px;
    }
  }
`;
