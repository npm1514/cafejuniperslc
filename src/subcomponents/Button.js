import React, { Component } from 'react';
import { Button } from '../styled-components/subcomponents/button';

class ButtonComponent extends Component {
  render(){
    return (
      <Button id={this.props.id}>
        button
      </Button>
    );
  }
}

export default ButtonComponent;
