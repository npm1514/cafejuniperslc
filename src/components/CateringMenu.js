import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { Menu } from './'
import { CateringMenuWrap, CateringMenu, CateringMenuLeft, CateringMenuRight, MenuMarkup } from '../styled-components/components/cateringmenu';
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
              <th>Menu</th>
              <th>32<sup>oz</sup></th>
              <th>64<sup>oz</sup></th>
              <th>128<sup>oz</sup></th>
            </tr>
            <tr>
              <td>House Coffee</td>
              <td>$11.00</td>
              <td>$25.00</td>
              <td>$40.00</td>
            </tr>
            <tr>
              <td>Single Origin</td>
              <td>$12.00</td>
              <td>$35.00</td>
              <td>$55.00</td>
            </tr>
            <tr>
              <td>Cold Brew</td>
              <td>$13.00</td>
              <td>$30.00</td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>Tea</td>
              <td>$10.00</td>
              <td>$20.00</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Pastries</td>
              <td>Standard</td>
              <td>Rates</td>
            </tr>
            <div></div>
            <br/>
            <tr>
              <th>Volume Discounts</th>
              <th>% Off</th>
              <th></th>
            </tr>
            <tr>
              <td>Weekly</td>
              <td>5%</td>
              <td></td>
            </tr>
            <tr>
              <td>Monthly</td>
              <td>10%</td>
              <td></td>
            </tr>
            <tr>
              <td>Annual</td>
              <td>20%</td>
              <td></td>
            </tr>
          </table>
        </Menu>
    );
  }
}

export default CateringMenuComponent;
