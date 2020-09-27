import React, { Component } from 'react';
import { MessageWrap, Message, TextBox } from '../styled-components/components/message';
import { Hex } from '../subcomponents';
import { lightblue } from '../styled-components/colors';
import { pink } from '../styled-components/colors';

class MessageComponent extends Component {
  render(){
    return (
      <MessageWrap id={this.props.id}>
        <Message>
          <h1>123-456-7890 | cafejuniperslc@gmail.com</h1>
          <h1>Shoot us a message</h1>
          <TextBox>
            <Hex className="desktop-hex" color={lightblue} bottom={-11} right={-15} size={75}>
              <polygon points="20 40 75 30 50 80 42 60 62 40 40 56" fill={pink}/>
            </Hex>
            <textarea placeholder="Talk to me!"></textarea>
          </TextBox>
        </Message>
      </MessageWrap>
    );
  }
}

export default MessageComponent;
