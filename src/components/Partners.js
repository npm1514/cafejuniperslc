import React, { Component } from 'react';
import { Partners, PartnerList } from '../styled-components/components/partners';

class PartnersComponent extends Component {
  render(){
    return (
      <Partners id={this.props.id}>
        <h1>Our Local Partners</h1>
        <hr/>
        <PartnerList>
          <a href="https://www.bluecopperslc.com/"><img src="/images/bluecopperlogooption-01.png" /></a>
          <a href="https://mimsslc.com/"><img src="/images/MIMS_logo.jpg"/></a>
        </PartnerList>
        <hr/>
        <p>Without whom we could not run our business.</p>
      </Partners>
    );
  }
}

export default PartnersComponent;
