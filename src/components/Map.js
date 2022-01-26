import React, { Component } from 'react';
import { MapWrap, Map, MapID } from '../styled-components/components/map';
import { Hex } from '../subcomponents';
import { green, pink } from '../styled-components/colors';

class MapComponent extends Component {
  render(){
    return (
      <MapWrap>
        <MapID id={this.props.id}/>
        <Map>
          <Hex className="desktop-hex" color={green} top={-77} left={-67} size={200}/>
          <Hex className="mobile-hex" color={pink} top={-77} left={-27} size={75}/>
          <h2>Come grab a cup of coffee at <br/>29 East 400 South<br/>Salt Lake City, Utah 84111</h2>
          <iframe
            className="desktop-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0500648091283!2d-111.89217568459362!3d40.760923579326665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f51053dac723%3A0x39f2100c58807a0b!2s29%20E%20400%20S%2C%20Salt%20Lake%20City%2C%20UT%2084111!5e0!3m2!1sen!2sus!4v1600403552691!5m2!1sen!2sus"
            title="map of location desktop"
            width="600"
            height="400"
            frameBorder="0"
            style={{border:0}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <iframe
            className="mobile-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0500648091283!2d-111.89217568459362!3d40.760923579326665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f51053dac723%3A0x39f2100c58807a0b!2s29%20E%20400%20S%2C%20Salt%20Lake%20City%2C%20UT%2084111!5e0!3m2!1sen!2sus!4v1600403552691!5m2!1sen!2sus"
            title="map of location mobile"
            width="320"
            height="200"
            frameBorder="0"
            style={{border:0}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>

          <h2 style={{marginTop: "12px"}}>Hours</h2>
          <h2>Monday - Thursday | 7am - 3pm</h2>
          <h2>Friday - Sunday | 7am - 5pm</h2>
        </Map>
      </MapWrap>
    );
  }
}

export default MapComponent;
