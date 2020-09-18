import React, { Component } from 'react';
import { Banner, Header, Menu, Parallax, Description, Map, Message, Partners, Footer } from '../components';
import { HomeWrapper } from '../styled-components/home';

class Home extends Component {
    render(){
      return (
          <HomeWrapper>
            <Banner id="home"/>
            <Header/>
            <Menu/>
            <Parallax url="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/blog_banner/public/2019-03/19SPR_Website_HomepageBanner_desktop_Mocha_1440x550.jpg?itok=GDnw2q7Z"/>
            <Description id="about"/>
            <Parallax url="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/blog_banner/public/2019-03/19SPR_Website_HomepageBanner_desktop_Mocha_1440x550.jpg?itok=GDnw2q7Z"/>
            <Map id="map"/>
            <Message id="contact"/>
            <Partners/>
            <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
