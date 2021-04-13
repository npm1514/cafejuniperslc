import React, { Component } from 'react';
import { BannerWrap, Banner } from '../styled-components/components/banner';

class BannerComponent extends Component {
  render(){
    const { id, img, children } = this.props;
    return (
      <BannerWrap id={id} img={img}>
        <Banner>
          {children}
        </Banner>
      </BannerWrap>
    );
  }
}

export default BannerComponent;
