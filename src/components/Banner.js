import React, { Component } from 'react';
import { BannerWrap, Banner } from '../styled-components/components/banner';
import { Hex } from '../subcomponents';
import { darkblue, green, pink, brown } from '../styled-components/colors';

class BannerComponent extends Component {
  render(){
    return (
      <BannerWrap id={this.props.id}>
        <Banner>
          <Hex color={darkblue} top={-80} left={-60} size={230}/>
          <Hex color={green} top={135} left={80} size={130}/>
          <Hex color={pink} top={-25} right={110} size={100}/>
          <Hex color={darkblue} top={-90} right={-100} size={200}/>
          <Hex color={brown} top={120} right={-10} size={160}/>
          <img src="/images/Cafe-Juniper_Primary_01.png"/>
        </Banner>
      </BannerWrap>
    );
  }
}

export default BannerComponent;
