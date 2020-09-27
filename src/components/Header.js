import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { HeaderWrap, DesktopHeader, MobileMenu, MobileHeader, HexLock } from '../styled-components/components/header';
import { green, darkblue } from '../styled-components/colors';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  clickMenu = () => {
    if(this.state.menuOpen) this.closeMenu()
    else this.openMenu()
  }
  closeMenu = () => {
    this.setState(
      { menuOpen: false },
      () => document.body.removeEventListener('click', this.onBlur)
    )
  }
  openMenu = () => {
    this.setState(
      { menuOpen: true },
      () => document.body.addEventListener('click', this.onBlur)
    )
  }
  onBlur = (e) => {
    if(!e.path.find(a => a.id == "mobile-header") && !e.path.find(a => a.id == "mobile-menu")) this.closeMenu();
  }
  render(){
    return (
      <HeaderWrap>
        <MobileHeader id="mobile-header">
          <img src="/images/Cafe-Juniper_Secondary_02.png"/>
          <HexLock onClick={this.clickMenu}>
            <Hex className="mobile-hex" color={green} top={0} left={0} right={0} bottom={0} size={60}>
              <line x1="25" x2="75" y1="40" y2="40" stroke={darkblue} strokeWidth="4"/>
              <line x1="25" x2="75" y1="50" y2="50" stroke={darkblue} strokeWidth="4"/>
              <line x1="25" x2="75" y1="60" y2="60" stroke={darkblue} strokeWidth="4"/>
            </Hex>
          </HexLock>
        </MobileHeader>
        {
          this.state.menuOpen &&
          <MobileMenu id="mobile-menu">
            <div><a href="/#menu">Menu</a></div>
            <div><a href="/#about">About Us</a></div>
            <div><a href="/#map">Location</a></div>
            <div><a href="/#contact">Contact</a></div>
            <div className="online-order"><a className="online-order" href="https://www.clover.com/online-ordering/cafe-juniper-llc-salt-lake-city">Order Online</a></div>
          </MobileMenu>
        }
        <DesktopHeader>
          <a href="/#menu">Menu</a>
          <a href="/#about">About Us</a>
          <a className="online-order" href="/#order">Order Online</a>
          <a href="/#map">Location</a>
          <a href="/#contact">Contact</a>
        </DesktopHeader>
      </HeaderWrap>
    );
  }
}

export default HeaderComponent;
