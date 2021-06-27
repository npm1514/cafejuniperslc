import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { Menu } from './'
import { CoffeeMenuWrap, CoffeeMenu, CoffeeMenuLeft, CoffeeMenuRight } from '../styled-components/components/coffeemenu';
import { brown, darkblue, pink } from '../styled-components/colors';

class CoffeeMenuComponent extends Component {
  render(){
    return (
        <Menu id={this.props.id}>
          <Hex className="mobile-hex" color={brown} top={-5} left={-125} size={150}/>
          <Hex className="mobile-hex" color={darkblue} top={240} right={-60} size={100}/>
          <Hex className="mobile-hex" color={pink} top={360} left={-25} size={50}/>
          <CoffeeMenuLeft>
            <table>
              <tr>
                <th>Drinks</th>
                <th>All Sizes</th>
              </tr>
              <tr>
                <td>Espresso, Americano</td>
                <td>$3.00</td>
              </tr>
              <tr>
                <td>Cortado, Cappuccino</td>
                <td>$3.50</td>
              </tr>
              <tr>
                <td>Latte, Chai, Matcha</td>
                <td>$4.25</td>
              </tr>
              <tr>
                <td>Drip, Tea</td>
                <td>$3.25</td>
              </tr>
              <tr>
                <td>Pour Over</td>
                <td>$4.00</td>
              </tr>
              <tr>
                <td>Cold Brew</td>
                <td>$4.00</td>
              </tr>
              <tr>
                <td>Hot Cocoa</td>
                <td>$4.00</td>
              </tr>
              <tr>
                <th>Alternative Milk</th>
                <th>+$0.50</th>
              </tr>
              <tr>
                <th>Extra Flavors</th>
                <th>+$0.50</th>
              </tr>
              <br/>
              <tr>
                <th>Retail</th>
                <th></th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
              </tr>
              <tr>
                <td>House Espresso</td>
                <td>$17.00</td>
              </tr>
              <tr>
                <td>House Coffee</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Single Origin</td>
                <td>As Listed</td>
              </tr>
              <br/>
              <tr>
                <th>Toast</th>
                <th>$3.50</th>
              </tr>
              <tr>
                <td>Italian Toast</td>
                <td>$4.00</td>
              </tr>
              <tr>
                <td>Hummus Toast</td>
                <td>$6.00</td>
              </tr>
              <tr>
                <td>Ricotta Toast</td>
                <td>$7.00</td>
              </tr>
              <tr>
                <td>Avocado Toast</td>
                <td>$7.00</td>
              </tr>
              <tr>
                <td>Mushroom Toast</td>
                <td>$8.00</td>
              </tr>
              <tr>
                <td>Specialty Toast</td>
                <td>As Listed</td>
              </tr>
              <tr>
                <th>Extras</th>
                <th>+$1.00</th>
              </tr>
              <br/>

              <tr>
                <th>Snacks</th>
                <th></th>
              </tr>
              <tr>
                <td>Cookies</td>
                <td>$2.00</td>
              </tr>
              <tr>
                <td>Pastries</td>
                <td>$3.00</td>
              </tr>
            </table>
          </CoffeeMenuLeft>
        </Menu>
    );
  }
}

export default CoffeeMenuComponent;
