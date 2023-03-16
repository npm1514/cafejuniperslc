import React, { Component } from 'react';
import { Banner, Header, CateringMenu, About, Message, Footer, Subscribe } from '../components';
import { CateringWrapper, OnlineOrder } from '../styled-components/pages/catering';

class Catering extends Component {
    scroll = (id) => {
      if(id == "home"){
        window.location.href = "/"
      } else {
        window.location.href = "/" + id;
      }
    }
    render(){
      return (
          <CateringWrapper>
            <Banner id="catering"/>
            <Header scroll={this.scroll}/>
            <About noLogo noHexes>
              <h2>Cafe Juniper Subscription & Catering</h2>
              <p>We at Cafe Juniper are capable of providing premium coffee to anybody and any business within the Salt Lake valley. Please consider our catering menu and if you are interested, fill out the form below.</p>
            </About>
            <CateringMenu/>
            <Subscribe/>
            <Footer>
              <h2>385-454-2947 | cafejuniperslc@gmail.com</h2>
            </Footer>
          </CateringWrapper>
      );
    }
}

export default Catering;
