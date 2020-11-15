import React, { Component } from 'react';
import { Banner, Header, CoffeeMenu, Parallax, About, Map, Message, Partners, Footer, Delivery } from '../components';
import { HomeWrapper, OnlineOrder } from '../styled-components/home';

class Home extends Component {
    render(){
      return (
          <HomeWrapper>
            <Banner/>
            <Header/>
            <CoffeeMenu/>
            <Parallax className="mobile-parallax" url="/images/normalcup.jpg"/>
            <About id="about">
              <h2>ABOUT US</h2>
              <p>Our team has been in the hospitality industry of Salt Lake City for the last ten plus years. Our mission is to give back to the Salt Lake City community by providing the best quality coffee, snacks, and confectionaries sourced both locally and responsibly in our cute downtown cafe.</p>
            </About>
            <Parallax url="/images/normalcup.jpg"/>
            <Delivery/>
            <Map id="map"/>
            <Message id="contact"/>
            <Partners/>
            <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
