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
          <Hex className="mobile-hex" color={pink} top={360} right={50} size={50}/>
          <CoffeeMenuLeft>
            <table>
              <tr>
                <th>Drinks</th>
                <th>8<sup>oz</sup></th>
                <th>12<sup>oz</sup></th>
                <th>16<sup>oz</sup></th>
              </tr>
              <tr>
                <td>Espresso</td>
                <td>$3.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Cortado</td>
                <td>$3.50</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Cappuccino</td>
                <td>$3.50</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Latte</td>
                <td>$4.00</td>
                <td>$4.50</td>
                <td>$5.00</td>
              </tr>
              <tr>
                <td>Drip</td>
                <td></td>
                <td>$3.00</td>
                <td>$3.50</td>
              </tr>
              <tr>
                <td>Americano</td>
                <td></td>
                <td>$3.00</td>
                <td>$3.50</td>
              </tr>
              <tr>
                <td>Pour Over</td>
                <td></td>
                <td>$4.00</td>
                <td>$4.50</td>
              </tr>
              <tr>
                <td>Cold Brew</td>
                <td></td>
                <td>$4.50</td>
                <td>$5.00</td>
              </tr>
              <tr>
                <td>Chai</td>
                <td></td>
                <td>$4.50</td>
                <td>$5.00</td>
              </tr>
              <tr>
                <td>Tea</td>
                <td></td>
                <td>$3.00</td>
                <td>$3.50</td>
              </tr>
              <tr>
                <td>Hot Cocoa</td>
                <td></td>
                <td>$4.00</td>
                <td>$4.50</td>
              </tr>
              <tr>
                <th>Extra Flavors</th>
                <th></th>
                <th></th>
                <th>+$1.00</th>
              </tr>
              <br/>
              <tr>
                <th>Retail</th>
                <th></th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
              </tr>
              <tr>
                <td>House Coffee</td>
                <td></td>
                <td></td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Single Origin</td>
                <td></td>
                <td></td>
                <td>$19.00</td>
              </tr>
              <tr>
                <td>House Espresso</td>
                <td></td>
                <td></td>
                <td>$17.00</td>
              </tr>
            </table>
          </CoffeeMenuLeft>
          <CoffeeMenuRight>
            <table>
              <tr>
                <th>Food</th>
                <th></th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
              </tr>
              <tr>
                <td>Pie</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$5.00</td>
              </tr>
              <tr>
                <td>Sourdoughnie</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$4.00</td>
              </tr>
              <tr>
                <td>Cookie</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$3.00</td>
              </tr>
              <br/>
              <tr>
                <th>Toast</th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <th>$3.50</th>
              </tr>
              <tr>
                <td>Italian Toast</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$4.00</td>
              </tr>
              <tr>
                <td>Hummus Toast</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$6.00</td>
              </tr>
              <tr>
                <td>Ricotta Toast</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$7.00</td>
              </tr>
              <tr>
                <td>Avocado Toast</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$7.00</td>
              </tr>
              <tr>
                <td>Fun Guy Toast</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$8.00</td>
              </tr>
              <tr>
                <td>Specialty Toast</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$8.00</td>
              </tr>
              <tr>
                <th>Extras</th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <th>+$1.00</th>
              </tr>
            </table>
          </CoffeeMenuRight>
        </Menu>
    );
  }
}

export default CoffeeMenuComponent;
