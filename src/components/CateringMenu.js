import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { Menu } from './'
import { CateringMenuWrap, CateringMenu, CateringMenuLeft, CateringMenuRight, MenuMarkup } from '../styled-components/components/cateringmenu';
import { brown, darkblue, pink } from '../styled-components/colors';

class CateringMenuComponent extends Component {
  render(){
    return (
        <Menu id={this.props.id} style={{flexDirection: "column"}}>
          <table>
            <tr>
              <th>Coffee Menu</th>
              <th>16<sup>oz</sup></th>
              <th>32<sup>oz</sup></th>
              <th>64<sup>oz</sup></th>
              <th>128<sup>oz</sup></th>
            </tr>
            <tr>
              <td>House Coffee</td>
              <td>$6.00</td>
              <td>$11.00</td>
              <td>$20.00</td>
              <td>$38.00</td>
            </tr>
            <tr>
              <td>Single Origin</td>
              <td>$6.50</td>
              <td>$12.00</td>
              <td>$22.00</td>
              <td>$40.00</td>
            </tr>
            <tr>
              <td>Cold Brew</td>
              <td>$7.00</td>
              <td>$13.00</td>
              <td>$24.00</td>
              <td>$45.00</td>
            </tr>
            <tr>
              <td>Tea</td>
              <td>$6.00</td>
              <td>$11.00</td>
              <td>$20.00</td>
              <td>$38.00</td>
            </tr>
            <tr>
              <td>Hot Cocoa</td>
              <td>$7.00</td>
              <td>$13.00</td>
              <td>$24.00</td>
              <td>$45.00</td>
            </tr>
          </table>
          <br/>
          <p style={{margin: "auto", fontSize: "80%"}}>**Volume discounts may be applied to certain subscriptions based off of quantity and frequency. One time orders will not be included.</p>
        </Menu>
    );
  }
}

export default CateringMenuComponent;
