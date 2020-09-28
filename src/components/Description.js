import React, { Component } from 'react';
import { DescriptionWrap, Description, DescriptionLeft, DescriptionRight } from '../styled-components/components/description';
import { Hex } from '../subcomponents';
import { lightblue, darkblue } from '../styled-components/colors';

class DescriptionComponent extends Component {
  render(){
    return (
      <DescriptionWrap id={this.props.id}>
        <Description>
          <Hex className="desktop-hex" color={lightblue} top={-40} right={-5} size={130}/>
          <Hex className="desktop-hex" color={darkblue} bottom={-60} right={70} size={100}/>
          <Hex className="mobile-hex" color={darkblue} top={30} right={-48} size={75}/>
          <DescriptionLeft>
            <img src="/images/Cafe-Juniper_Primary_03.png" />
          </DescriptionLeft>
          <DescriptionRight>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </DescriptionRight>
        </Description>
      </DescriptionWrap>
    );
  }
}

export default DescriptionComponent;
