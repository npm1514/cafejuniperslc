import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { Menu } from './'
import { CateringMenuWrap, CateringMenu, CateringMenuLeft, CateringMenuRight } from '../styled-components/components/cateringmenu';
import { brown, darkblue, pink } from '../styled-components/colors';

class CateringMenuComponent extends Component {
  render(){
    return (
        <Menu id={this.props.id}>
          <Hex className="mobile-hex" color={brown} top={-5} left={-125} size={150}/>
          <Hex className="mobile-hex" color={darkblue} top={240} right={-60} size={100}/>
          <Hex className="mobile-hex" color={pink} top={360} right={50} size={50}/>
          <table>
            <tr>
              <th>Drip Coffee</th>
              <th>64<sup>oz</sup></th>
              <th>128<sup>oz</sup></th>
            </tr>
            <tr>
              <td>House</td>
              <td>$25.00</td>
              <td>$40.00</td>
            </tr>
            <tr>
              <td>Single Origin</td>
              <td>$35.00</td>
              <td>$55.00</td>
            </tr>
            <br/>
            <tr>
              <th>Cold Brew</th>
              <th>$30.00</th>
              <th>$50.00</th>
            </tr>
            <tr>
              <th>Delivery</th>
              <th></th>
              <th>$5.00</th>
            </tr>
          </table>
          <p>*Weekly, Monthly, Annual Contract Discounts Available</p>
        </Menu>
    );
  }
}

export default CateringMenuComponent;
