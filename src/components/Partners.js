import React, { Component } from 'react';
import { Partners, PartnerList } from '../styled-components/components/partners';

class PartnersComponent extends Component {
  render(){
    return (
      <Partners id={this.props.id}>
        <h2>Our Local Partners</h2>
        <hr/>
        <PartnerList>
          <a rel="noopener" href="https://www.bluecopperslc.com/"><img src="/images/bluecopperlogooption-01.png" alt="blue copper logo"/></a>
          <a rel="noopener" href="https://mimsslc.com/"><img src="/images/MIMS_logo.jpg" alt="mims logo"/></a>
          <a rel="noopener" href="https://amourspreads.com/"><img src="/images/amourlogo.jpg" alt="amour logo"/></a>
          <a rel="noopener" href="https://www.eatchocolateconspiracy.com/"><img src="/images/chocolate.jpg" alt="chocolate conspiracy logo"/></a>
        </PartnerList>
        <hr/>
        <p>Without whom we could not run our business.</p>
      </Partners>
    );
  }
}

export default PartnersComponent;
