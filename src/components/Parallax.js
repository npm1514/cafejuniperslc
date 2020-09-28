import React, { Component } from 'react';
import { Parallax } from '../styled-components/components/parallax';

class ParallaxComponent extends Component {
  render(){
    return (
      <Parallax desktopurl={this.props.desktopurl} mobileurl={this.props.mobileurl}/>
    );
  }
}

export default ParallaxComponent;
