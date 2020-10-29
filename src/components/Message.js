import React, { Component } from 'react';
import { MessageWrap, Message, TextBox } from '../styled-components/components/message';
import { Hex } from '../subcomponents';
import { lightblue } from '../styled-components/colors';
import { pink, green } from '../styled-components/colors';

class MessageComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }
  submitMessage = (e) => {
    e.preventDefault();
    fetch('/emailer', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(res => {
      alert("An email has been submitted to the staff at Cafe Juniper. Someone will be in contact with you shortly.")
      this.setState({
        name: "",
        email: "",
        message: ""
      })
    })
    .catch(err => {
      alert("Something went wrong. Please contact Cafe Juniper directly via email or telephone. We are sorry for the inconvenience.")
      this.setState({
        name: "",
        email: "",
        message: ""
      })
    })
  }
  change = (e, prop) => {
    let obj = {};
    obj[prop] = e.currentTarget.value;
    this.setState(obj)
  }
  render(){
    const { name, email, message } = this.state;
    return (
      <MessageWrap id={this.props.id}>
        <Message>
          <Hex className="mobile-hex" color={green} bottom={-83} left={-50} size={100}/>
          <h2>385-213-5061 | cafejuniperslc@gmail.com</h2>
          <h2>Shoot us a message</h2>
          <form onSubmit={this.submitMessage}>
            <input
              value={name}
              placeholder="Name"
              type="text"
              required
              onChange={(e) => {this.change(e, "name")}}
              id="name-input"
            />
            <input
              value={email}
              placeholder="Email Address"
              type="email"
              required
              onChange={(e) => {this.change(e, "email")}}
              id="emial-input"
            />
            <textarea
              value={message}
              required
              placeholder="Talk to me!"
              onChange={(e) => {this.change(e, "message")}}
              id="message-textarea"
            ></textarea>
            <TextBox type="submit">
              <span style={{color: 'transparent'}}>Send Email Button</span>
              <Hex
                color={lightblue}
                bottom={-11}
                right={-15}
                size={75}
              >
                <polygon id="airplane" points="20 40 75 30 50 80 42 60 62 40 40 56" fill={pink}/>
              </Hex>
            </TextBox>
          </form>
        </Message>
      </MessageWrap>
    );
  }
}

export default MessageComponent;
