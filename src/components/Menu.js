import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { MenuWrap, Menu, MenuLeft, MenuRight } from '../styled-components/components/menu';
import { brown, darkblue, pink } from '../styled-components/colors';

class MenuComponent extends Component {
  render(){
    return (
      <MenuWrap>
        <Menu id="menu">
          <Hex className="mobile-hex" color={brown} top={-5} left={-125} size={150}/>
          <Hex className="mobile-hex" color={darkblue} top={240} right={-60} size={100}/>
          <Hex className="mobile-hex" color={pink} top={340} right={50} size={50}/>
          <MenuLeft>
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
              <br/>
              <tr>
                <th>Flavors</th>
                <th></th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
              </tr>
              <tr>
                <td>Chocolate</td>
                <td></td>
                <td></td>
                <td>+$1.00</td>
              </tr>
              <tr>
                <td>Caramel</td>
                <td></td>
                <td></td>
                <td>+$1.00</td>
              </tr>
              <tr>
                <td>Vanilla</td>
                <td></td>
                <td></td>
                <td>+$1.00</td>
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
                <td>$20.00</td>
              </tr>
              <tr>
                <td>House Espresso</td>
                <td></td>
                <td></td>
                <td>$17.00</td>
              </tr>
            </table>
          </MenuLeft>
          <MenuRight>
            <table>
              <tr>
                <th>Snacks</th>
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
                <td>$3.50</td>
              </tr>
              <tr>
                <td>Cookie</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$2.50</td>
              </tr>
              <br/>
              <tr>
                <th>Toast</th>
                <th></th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
              </tr>
              <tr>
                <td>Toast</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$3.50</td>
              </tr>
              <tr>
                <td>Italian Toast</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>$5.00</td>
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
              <br/>
              <tr>
                <th>Toast Ingredients</th>
                <th></th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
              </tr>
              <tr>
                <td>EVOO</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>+$0.50</td>
              </tr>
              <tr>
                <td>Butter</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>+$0.50</td>
              </tr>
              <tr>
                <td>Amour Jam</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>+$1.00</td>
              </tr>
              <tr>
                <td>Goat Cheese</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>+$1.00</td>
              </tr>
              <tr>
                <td>Ricotta</td>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
                <td>+$1.00</td>
              </tr>
            </table>
          </MenuRight>
        </Menu>
      </MenuWrap>
    );
  }
}

export default MenuComponent;
