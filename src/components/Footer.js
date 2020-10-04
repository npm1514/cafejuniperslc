import React, { Component } from 'react';
import { Footer } from '../styled-components/components/footer';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        <span>Copyright 2020 Cafe Juniper LLC</span>
        <a href="https://www.instagram.com/cafejuniperslc/" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/cafejuniperslc" target="_blank"><i className="fab fa-facebook-square"></i></a>
      </Footer>
    );
  }
}

export default FooterComponent;
