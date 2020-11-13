import React, { Component } from 'react';
import { Banner, Header, CateringMenu, Parallax, About, Map, Message, Partners, Footer, Delivery } from '../components';
import { CateringWrapper, OnlineOrder } from '../styled-components/catering';

class Catering extends Component {
    render(){
      return (
          <CateringWrapper>
            <Banner/>
            <Header/>
            <About>
              <h2>Catering Program</h2>
              <p>We want to be at the forefront of coffee catering in Salt Lake City. We are capable of providing premium coffee to any business or event within the Salt Lake valley. Please consider our catering menu and if you are interested, drop us a line.</p>
            </About>
            <CateringMenu/>
            <Message/>
            <Footer/>
          </CateringWrapper>
      );
    }
}

export default Catering;
