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
            <Parallax url="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/60781558_205066410472631_7372275983064387474_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=bOyCb7xLC-8AX93vKJ7&_nc_tp=19&oh=dc7aa47c27bab018dcd2ebfa103824f8&oe=5F99388F"/>
            <Description id="about"/>
            <Parallax url="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/60781558_205066410472631_7372275983064387474_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=bOyCb7xLC-8AX93vKJ7&_nc_tp=19&oh=dc7aa47c27bab018dcd2ebfa103824f8&oe=5F99388F"/>
            <Map id="map"/>
            <Message id="contact"/>
            <Partners/>
            <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
