import React, { Component } from 'react';
import { DeliveryWrap, Delivery, OrderID } from '../styled-components/components/delivery';
import { Hex } from '../subcomponents';
import { lightblue, darkblue } from '../styled-components/colors';

class DeliveryComponent extends Component {
  render(){
    return (
      <DeliveryWrap>
        <OrderID id={this.props.id}/>
        <Delivery>
          <h2 className="orderTitle">ORDER ONLINE</h2>
          <h2>PLACE AN ORDER FOR PICKUP!</h2>
          <p>[No delivery or processing fees!]</p>
          <a href="https://www.clover.com/online-ordering/cafe-juniper-llc-salt-lake-city" target="_blank" alt="Order Food Pickup with Clover" title="Order Food Pickup with Clover" style={{textDecoration: "none"}}>
            <div style={{background:"#FFF", borderRadius: "4px", padding: "8px 16px"}}><img className="clButton" src="/images/clover-logo.svg" style={{width: "200px"}}/></div>
          </a>
          <br/>
          <hr/>
          <h2>OR GET YOUR ORDER DELIVERED!</h2>
          <a href="https://www.doordash.com/business/596471/?utm_source=partner-link&utm_medium=website&utm_campaign=596471&utm_content=red-l" target="_blank" alt="Order Food Delivery with DoorDash" title="Order Food Delivery with DoorDash" style={{textDecoration: "none"}}>
            <div className="ddButton">Order Food Delivery with DoorDash</div>
          </a>
          <a href="https://postmates.com/merchant/cafe-juniper-salt-lake-city" target="_blank" alt="Order Food Delivery with Postmates" title="Order Food Delivery with Postmates" style={{textDecoration: "none"}}>
            <img className="pmButton" src="/images/postmates.png" style={{width: "268px"}}/>
          </a>
          <a href="https://www.grubhub.com/restaurant/cafe-juniper-29-e-400-s-salt-lake-city/2418846" target="_blank" alt="Order Food Delivery with Grubhub" title="Order Food Delivery with Grubhub" style={{textDecoration: "none"}}>
            <img className="ghButton" src="/images/grubhub.png" style={{width: "268px"}}/>
          </a>
          <a href="https://www.ubereats.com/salt-lake-city/food-delivery/cafe-juniper/Pf2MDmZ7TJycEdVMfcS5mg" target="_blank" alt="Order Food Delivery with Uber Eats" title="Order Food Delivery with Uber Eats" style={{textDecoration: "none"}}>
            <img className="ueButton" src="/images/UberEats.png" style={{width: "268px"}}/>
          </a>
        </Delivery>
      </DeliveryWrap>
    );
  }
}

export default DeliveryComponent;
