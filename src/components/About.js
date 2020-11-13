import React, { Component } from 'react';
import { AboutWrap, About, AboutLeft, AboutRight } from '../styled-components/components/about';
import { Hex } from '../subcomponents';
import { lightblue, darkblue } from '../styled-components/colors';

class AboutComponent extends Component {
  render(){
    return (
      <AboutWrap id={this.props.id}>
        <About>
          <Hex className="desktop-hex" color={lightblue} top={-40} right={-5} size={130}/>
          <Hex className="desktop-hex" color={darkblue} bottom={-60} right={70} size={100}/>
          <Hex className="mobile-hex" color={darkblue} top={30} right={-48} size={75}/>
          <AboutLeft>
            <img src="/images/Cafe-Juniper_Primary_03.png" alt="primary logo"/>
          </AboutLeft>
          <AboutRight>
            {this.props.children}
          </AboutRight>
        </About>
      </AboutWrap>
    );
  }
}

export default AboutComponent;
