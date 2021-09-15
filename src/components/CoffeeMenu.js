import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { Menu } from './'
import { CoffeeMenuWrap, CoffeeMenu, Row, Head, Data } from '../styled-components/components/coffeemenu';
import { brown, darkblue, pink } from '../styled-components/colors';

class CoffeeMenuComponent extends Component {
  render(){
    return (
        <Menu id={this.props.id}>
          <Hex className="mobile-hex" color={brown} top={-5} left={-125} size={150}/>
          <Hex className="mobile-hex" color={darkblue} top={240} right={-60} size={100}/>
          <Hex className="mobile-hex" color={pink} top={360} left={-25} size={50}/>
          <CoffeeMenu>
            <h2>MENU</h2>
            <Row>
              <Head>Drinks</Head>
              <Head>All Sizes</Head>
            </Row>
            <Row>
              <Data>Espresso, Americano</Data>
              <Data>$3.00</Data>
            </Row>
            <Row>
              <Data>Cortado, Cappuccino</Data>
              <Data>$3.50</Data>
            </Row>
            <Row>
              <Data>Latte, Chai, Matcha</Data>
              <Data>$4.25</Data>
            </Row>
            <Row>
              <Data>Drip, Tea</Data>
              <Data>$3.25</Data>
            </Row>
            <Row>
              <Data>Pour Over</Data>
              <Data>$4.00</Data>
            </Row>
            <Row>
              <Data>Cold Brew</Data>
              <Data>$4.00</Data>
            </Row>
            <Row>
              <Data>Hot Cocoa</Data>
              <Data>$4.00</Data>
            </Row>
            <Row>
              <Head>Alt. Milk</Head>
              <Head>+$0.50</Head>
            </Row>
            <Row>
              <Head>Syrups</Head>
              <Head>+$0.50</Head>
            </Row>
            <br/>

            <Row>
              <Head>Toast</Head>
              <Head>$3.50</Head>
            </Row>
            <Row>
              <Data>Italian Toast</Data>
              <Data>$4.00</Data>
            </Row>
            <Row>
              <Data>Hummus Toast</Data>
              <Data>$6.00</Data>
            </Row>
            <Row>
              <Data>Ricotta Toast</Data>
              <Data>$7.00</Data>
            </Row>
            <Row>
              <Data>Avocado Toast</Data>
              <Data>$7.00</Data>
            </Row>
            <Row>
              <Data>Mushroom Toast</Data>
              <Data>$8.00</Data>
            </Row>
            <Row>
              <Data>Specialty Toast</Data>
              <Data>As Listed</Data>
            </Row>
            <Row>
              <Head>Extras</Head>
              <Head>+$1.00</Head>
            </Row>
            <br/>

            <Row>
              <Head>Snacks</Head>
              <Head></Head>
            </Row>
            <Row>
              <Data>Cookies</Data>
              <Data>$2.00</Data>
            </Row>
            <Row>
              <Data>Pastries</Data>
              <Data>$3.00</Data>
            </Row>
            <Row>
              <Data>Scones</Data>
              <Data>$4.00</Data>
            </Row>
          </CoffeeMenu>
        </Menu>
    );
  }
}

export default CoffeeMenuComponent;
