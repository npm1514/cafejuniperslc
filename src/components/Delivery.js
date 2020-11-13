import React, { Component } from 'react';
import { DeliveryWrap, Delivery } from '../styled-components/components/delivery';
import { Hex } from '../subcomponents';
import { lightblue, darkblue } from '../styled-components/colors';

class DeliveryComponent extends Component {
  render(){
    return (
      <DeliveryWrap>
        <Delivery>
          <h2>GET YOUR ORDER DELIVERED!</h2>
          <a href="https://www.doordash.com/business/596471/?utm_source=partner-link&utm_medium=website&utm_campaign=596471&utm_content=red-l" target="_blank" alt="Order Food Delivery with DoorDash" title="Order Food Delivery with DoorDash" style={{textDecoration: "none"}}>
            <div className="ddButton">Order Food Delivery with DoorDash</div>
          </a>
          <a href="https://www.grubhub.com/restaurant/cafe-juniper-29-e-400-s-salt-lake-city/2418846" target="_blank" alt="Order Food Delivery with Grubhub" title="Order Food Delivery with Grubhub" style={{textDecoration: "none"}}>
            <img className="ghButton" src="/images/grubhub.png" style={{width: "268px"}}/>
          </a>

        </Delivery>
      </DeliveryWrap>
    );
  }
}

export default DeliveryComponent;
