import React, { Component } from 'react';
import { Banner, Header, Menu, Parallax, Description, Map, Message, Partners, Footer } from '../components';
import { HomeWrapper, OnlineOrder } from '../styled-components/home';

class Home extends Component {
    render(){
      return (
          <HomeWrapper>
            <Banner id="home"/>
            <Header/>
            <Menu/>
            <Parallax url="/images/normalcup.jpg"/>
            <Description id="about"/>
            <Parallax className="mobile-parallax" url="/images/normalcup.jpg"/>
            <Map id="map"/>
            <Message id="contact"/>
            <Partners/>
            <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
