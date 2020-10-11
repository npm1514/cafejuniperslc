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
            <img src="/images/Cafe-Juniper_Primary_03.png" alt="primary logo"/>
          </DescriptionLeft>
          <DescriptionRight>
            <h1>ABOUT US</h1>
            <p>Our team has been in the hospitality industry of Salt Lake City for the last ten plus years. Our mission is to give back to the Salt Lake City community by providing the best quality coffee, snacks, and confectionaries sourced both locally and responsibly.</p>
          </DescriptionRight>
        </Description>
      </DescriptionWrap>
    );
  }
}

export default DescriptionComponent;
