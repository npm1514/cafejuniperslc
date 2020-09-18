import React, { Component } from 'react';
import { Partners } from '../styled-components/components/partners';

class PartnersComponent extends Component {
  render(){
    return (
      <Partners id={this.props.id}>
        partners
      </Partners>
    );
  }
}

export default PartnersComponent;
