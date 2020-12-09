import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { MenuWrap, Menu } from '../styled-components/components/menu';

class MenuComponent extends Component {
  render(){
    const { id, style, children } = this.props;
    return (
      <MenuWrap id={id}>
        <Menu style={style}>
          {children}
        </Menu>
      </MenuWrap>
    );
  }
}

export default MenuComponent;
