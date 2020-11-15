import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { HeaderWrap, DesktopHeader, MobileMenu, MobileHeader, HexLock, Spacer, OnlineOrder, DesktopOrder } from '../styled-components/components/header';
import { green, darkblue, pink, brown } from '../styled-components/colors';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false,
      menuStuck: false
    }
  }
  clickMenu = () => {
    if(this.state.menuOpen) this.closeMenu()
    else this.openMenu()
  }
  closeMenu = () => {
    this.setState(
      { menuOpen: false },
      () => {
        document.body.removeEventListener('click', this.onBlur)
        document.body.removeEventListener('touchstart', this.onBlur)
      }
    )
  }
  openMenu = () => {
    this.setState(
      { menuOpen: true },
      () => {
        document.body.addEventListener('click', this.onBlur)
        document.body.addEventListener('touchstart', this.onBlur)
      }
    )
  }
  onBlur = (e) => {
    if(!e.path.find(a => a.id == "mobile-header") && !e.path.find(a => a.id == "mobile-menu")) this.closeMenu();
  }
  scrollCheck = (e) => {
    if(window.scrollY > 300) this.setState({menuStuck: true})
    else this.setState({menuStuck: false})
  }
  componentDidMount(){
    window.removeEventListener('scroll', this.scrollCheck)
    window.addEventListener('scroll', this.scrollCheck)
  }
  render(){
    const { menuStuck } = this.state;
    return (
      <HeaderWrap>
        <MobileHeader id="mobile-header">
          <Hex className="mobile-hex" color={pink} top={-17} right={10} size={40}/>
          <span>
          <a name="link to home" href="/">
            <img alt="secondary logo" src="/images/Cafe-Juniper_Secondary_02.png"/>
          </a>
          <HexLock onClick={this.clickMenu}>
            <Hex className="mobile-hex" color={green} top={0} left={0} right={0} bottom={0} size={60}>
              <line x1="25" x2="75" y1="40" y2="40" stroke={darkblue} strokeWidth="4"/>
              <line x1="25" x2="75" y1="50" y2="50" stroke={darkblue} strokeWidth="4"/>
              <line x1="25" x2="75" y1="60" y2="60" stroke={darkblue} strokeWidth="4"/>
            </Hex>
          </HexLock>
          </span>
          <h1>Salt lake city's premier coffee shop</h1>
        </MobileHeader>
        {
          this.state.menuOpen &&
          <MobileMenu id="mobile-menu">
            <div><a onClick={this.closeMenu} href="/">Home</a></div>
            <div><a onClick={this.closeMenu} href="/#about">About Us</a></div>
            <div><a onClick={this.closeMenu} href="/#map">Location</a></div>
            <div><a onClick={this.closeMenu} href="/#contact">Contact</a></div>
            <div><a onClick={this.closeMenu} href="/catering">Catering</a></div>
            <div className="online-order"><a rel="noopener" className="online-order" href="https://www.clover.com/online-ordering/cafe-juniper-llc-salt-lake-city">Order Online</a></div>
          </MobileMenu>
        }
        <HeaderWrap menuStuck={menuStuck}>
          <DesktopHeader menuStuck={menuStuck}>
            <a href="/">Home</a>
            <a href="/#about">About Us</a>
            <a href="/#map">Location</a>
            <a href="/#contact">Contact</a>
            <a href="/catering">Catering</a>
          </DesktopHeader>
          <DesktopOrder>
            <a rel="noopener" className="online-order" href="https://www.clover.com/online-ordering/cafe-juniper-llc-salt-lake-city">Order Online</a>
          </DesktopOrder>
        </HeaderWrap>
        <Spacer menuStuck={menuStuck}/>
        <OnlineOrder><a rel="noopener" className="online-order" href="https://www.clover.com/online-ordering/cafe-juniper-llc-salt-lake-city">Order Online</a></OnlineOrder>
      </HeaderWrap>
    );
  }
}

export default HeaderComponent;
