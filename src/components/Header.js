import React, { Component } from 'react';
import { Button } from './'
import { HeaderWrap, Header } from '../styled-components/components/header';

class HeaderComponent extends Component {
  render(){
    return (
      <HeaderWrap>
        <Header>
          <a href="/#menu">Menu</a>
          <a href="/#about">About Us</a>
          <a className="online-order" href="/#order">Order Online</a>
          <a href="/#map">Location</a>
          <a href="/#contact">Contact</a>
        </Header>
      </HeaderWrap>
    );
  }
}

export default HeaderComponent;
