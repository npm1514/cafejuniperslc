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
        </Delivery>
      </DeliveryWrap>
    );
  }
}

export default DeliveryComponent;
