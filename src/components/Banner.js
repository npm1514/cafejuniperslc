import React, { Component } from 'react';
import { BannerWrap, Banner } from '../styled-components/components/banner';
import { Hex } from '../subcomponents';
import { darkblue, green, pink, brown } from '../styled-components/colors';

class BannerComponent extends Component {
  render(){
    const { id, img, children } = this.props;
    return (
      <BannerWrap id={id} img={img}>
        <Banner>
          <Hex className="desktop-hex" color={darkblue} top={-80} left={-60} size={230}/>
          <Hex className="desktop-hex" color={green} top={135} left={80} size={130}/>
          <Hex className="desktop-hex" color={pink} top={-25} right={110} size={100}/>
          <Hex className="desktop-hex" color={darkblue} top={-90} right={-100} size={200}/>
          <Hex className="desktop-hex" color={brown} top={120} right={-10} size={160}/>
          <a href="/"><img src="/images/Cafe-Juniper_J_01.png" alt="primary logo"/></a>
          <div>
            C<span className="smallLetters">A</span>FÉ JUN<span className="smallLetters">I</span>P<span className="smallLetters">E</span>R
          </div>
          <h1 className="bottomBanner">
            Salt lake city's premier coffee shop
          </h1>
        </Banner>
      </BannerWrap>
    );
  }
}

export default BannerComponent;
