import React, { Component } from 'react';
import { Partners, PartnerList } from '../styled-components/components/partners';

class PartnersComponent extends Component {
  render(){
    return (
      <Partners id={this.props.id}>
        <h1>Our Local Partners</h1>
        <hr/>
        <PartnerList>
          <a href="https://www.bluecopperslc.com/"><img src="https://images.squarespace-cdn.com/content/51e96fcde4b09e55a03510a0/1384813590049-JT5ZTY8WTKQOGQXFEK1F/bluecopperlogooption-01.png?content-type=image%2Fpng" /></a>
          <a href="https://mimsslc.com/"><img src="https://cdn.shopify.com/s/files/1/0432/0228/1631/files/MIMS_logo_472fb171-b623-44d7-a21d-78950c28cbcb_300x300.jpg?v=1598733206"/></a>
        </PartnerList>
        <hr/>
        <p>Without whom we could not run our business.</p>
      </Partners>
    );
  }
}

export default PartnersComponent;
