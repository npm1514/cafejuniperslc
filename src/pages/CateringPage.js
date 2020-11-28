import React, { Component } from 'react';
import { Banner, Header, CateringMenu, About, Message, Footer, Subscribe } from '../components';
import { CateringWrapper, OnlineOrder } from '../styled-components/catering';

class Catering extends Component {
    render(){
      return (
          <CateringWrapper>
            <Banner/>
            <Header/>
            <About noLogo noHexes>
              <h2>Catering Program</h2>
              <p>We want to be at the forefront of coffee catering in Salt Lake City. We are capable of providing premium coffee to any business or event within the Salt Lake valley. Please consider our catering menu and if you are interested, fill out the form below.</p>
            </About>
            <CateringMenu/>
            <About noLogo noHexes>
              <h2>Subscription Program</h2>
              <p>Every one of our retail whole bean products are available by subscription. Sign up today to get weekly coffee beans!</p>
            </About>
            <Subscribe/>
            <Message noMessage/>
            <Footer/>
          </CateringWrapper>
      );
    }
}

export default Catering;
