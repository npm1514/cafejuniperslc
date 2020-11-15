import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { MenuWrap, Menu } from '../styled-components/components/menu';

class MenuComponent extends Component {
  render(){
    return (
      <MenuWrap>
        <Menu>
          {this.props.children}
        </Menu>
      </MenuWrap>
    );
  }
}

export default MenuComponent;
