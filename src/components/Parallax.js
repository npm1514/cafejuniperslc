import React, { Component } from 'react';
import { Parallax } from '../styled-components/components/parallax';

class ParallaxComponent extends Component {
  render(){
    return (
      <Parallax url={this.props.url} className={this.props.className}/>
    );
  }
}

export default ParallaxComponent;
