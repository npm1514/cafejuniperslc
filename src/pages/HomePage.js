import React, { Component } from 'react';
import { Banner, Header, CoffeeMenu, Parallax, About, Map, Message, Partners, Footer, Delivery } from '../components';
import { HomeWrapper, Toast } from '../styled-components/pages/home';
import { Hex } from '../subcomponents';
import { darkblue, green, pink, brown } from '../styled-components/colors';

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
            <Banner id="home">
              <Hex className="desktop-hex" color={darkblue} top={-80} left={-60} size={230}/>
              <Hex className="desktop-hex" color={green} top={135} left={80} size={130}/>
              <Hex className="desktop-hex" color={pink} top={-25} right={110} size={100}/>
              <Hex className="desktop-hex" color={darkblue} top={-90} right={-100} size={200}/>
              <Hex className="desktop-hex" color={brown} top={120} right={-10} size={160}/>
              <a href="/"><img src="/images/Cafe-Juniper_J_01.png" alt="primary logo"/></a>
              <div>
                C<span className="smallLetters">A</span>FÉ JUN<span className="smallLetters">I</span>P<span className="smallLetters">E</span>R
              </div>
              <h1 className="bottomBanner">
                Salt lake city's premier coffee shop
              </h1>
            </Banner>
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
              <Toast>Try our Toast!</Toast>
            </Parallax>
            <Message id="contact"/>
            <Partners/>
            <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
