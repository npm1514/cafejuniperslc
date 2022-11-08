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
          <h2>Come grab a cup of coffee at<br/>Church & State<br/>370 South 300 East<br/>Salt Lake City, Utah 84111</h2>
          <iframe
            className="desktop-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.175795119414!2d-111.8827731!3d40.7610581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7583d4d0933696cf!2sChurch%20%26%20State!5e0!3m2!1sen!2sus!4v1657563144660!5m2!1sen!2sus"
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.175795119414!2d-111.8827731!3d40.7610581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7583d4d0933696cf!2sChurch%20%26%20State!5e0!3m2!1sen!2sus!4v1657563144660!5m2!1sen!2sus"
            title="map of location mobile"
            width="320"
            height="200"
            frameBorder="0"
            style={{border:0}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>

          <h2 style={{marginTop: "12px"}}>Hours | 7am - 5pm</h2>
        </Map>
      </MapWrap>
    );
  }
}

export default MapComponent;
