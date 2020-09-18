import React, { Component } from 'react';
import { MessageWrap, Message, TextBox } from '../styled-components/components/message';
import { Hex } from '../subcomponents';
import { lightblue } from '../styled-components/colors';

class MessageComponent extends Component {
  render(){
    return (
      <MessageWrap id={this.props.id}>
        <Message>
          <h1>123-456-7890 | cafejuniperslc@gmail.com</h1>
          <h1>Shoot us a message</h1>
          <TextBox>
            <Hex color={lightblue} bottom={-30} right={-33} size={75}/>
            <textarea></textarea>
          </TextBox>
        </Message>
      </MessageWrap>
    );
  }
}

export default MessageComponent;
