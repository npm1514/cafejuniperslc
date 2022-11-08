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
            <About id="about">
              <h2>ABOUT US</h2>
              <p>Our team has been in the hospitality industry of Salt Lake City for the last ten plus years. Our mission is to give back to the community by providing the best quality coffee, pastries, and toast sourced both locally and responsibly in our cute downtown cafe.</p>
            </About>
            <Partners/>
            <Message id="contact"/>
            <Map id="map"/>
            <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
