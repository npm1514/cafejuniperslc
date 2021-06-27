import React, { Component } from 'react';
import { Banner, Header, CoffeeMenu, Parallax, About, Map, Message, Partners, Footer, Delivery } from '../components';
import { HomeWrapper, Toast } from '../styled-components/pages/home';

class Home extends Component {
    scroll = (id) => {
      if(id && document.getElementById(id)){
        document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth', passive: true});
      } else {
        window.location.href = "/" + id;
      }
    }
    componentDidMount(){
      if(this.props.data.path){
        document.getElementById(this.props.data.path).scrollIntoView({block: 'start', behavior: 'smooth', passive: true});
      } else {
        document.getElementById("home").scrollIntoView({block: 'start', behavior: 'smooth'});
      }
    }
    render(){
      return (
          <HomeWrapper>
            <Banner id="home"/>
            <Header scroll={this.scroll}/>
            <CoffeeMenu/>
            <Parallax className="mobile-parallax" url="/images/grub.jpg"/>
            <About id="about">
              <h2>ABOUT US</h2>
              <p>Our team has been in the hospitality industry of Salt Lake City for the last ten plus years. Our mission is to give back to the community by providing the best quality coffee, pastries, and toast sourced both locally and responsibly in our cute downtown cafe.</p>
            </About>
            <Parallax url="/images/grub.jpg"/>
            <Delivery id="order"/>
            <Map id="map"/>
            <Parallax url="/images/coolfront.jpg">
              <a href="https://www.clover.com/online-ordering/cafe-juniper-llc-salt-lake-city"><Toast>Try our Toast!</Toast></a>
            </Parallax>
            <Message id="contact"/>
            <Partners/>
            <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
