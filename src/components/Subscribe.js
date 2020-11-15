import React, { Component, Fragment } from 'react';
import { SubscribeWrap, Subscribe, TextBox } from '../styled-components/components/subscribe';
import { Select, MenuItem } from '@material-ui/core';
import { Hex } from '../subcomponents';
import { lightblue } from '../styled-components/colors';
import { pink, green } from '../styled-components/colors';

class SubscribeComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      business: "",
      email: "",
      message: "",
      products: [{
        product: "",
        quantity: "",
        frequency: ""
      }]
    };
  }
  addProduct = (e) => {
    let products = this.state.products;
    products.push({
      product: "",
      quantity: "",
      frequency: ""
    })
    this.setState({ products })
  }
  deleteProduct = (e,i) => {
    let products = this.state.products;
    products.splice(i,1)
    this.setState({ products })
  }
  submitSubscribe = (e) => {
    e.preventDefault();
    fetch('/subscriber', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(res => {
      alert("Your request has been submitted to the staff at Cafe Juniper. Someone will be in contact with you shortly regarding your subscription.")
      this.setState({
        name: "",
        business: "",
        email: "",
        message: "",
        products: [{
          product: "",
          quantity: "",
          frequency: ""
        }]
      })
    })
    .catch(err => {
      alert("Something went wrong. Please contact Cafe Juniper directly via email or telephone. We are sorry for the inconvenience.")
      this.setState({
        name: "",
        business: "",
        email: "",
        message: "",
        products: [{
          product: "",
          quantity: "",
          frequency: ""
        }]
      })
    })
  }
  productChange = (e, prop, i) => {
    let { products } = this.state;
    products[i][prop] = e.currentTarget.value;
    this.setState({ products });
  }
  change = (e, prop) => {
    let obj = {};
    obj[prop] = e.currentTarget.value;
    this.setState(obj)
  }
  render(){
    const { name, business, email, message, products } = this.state;
    return (
      <SubscribeWrap>
        <Subscribe>
          <h2>Submit your catering/subscription request below.</h2>
          <p>Timelines will be indefinite and subscriptions will end on written notification.</p>
          <form onSubmit={this.submitSubscribe}>
            <input
              value={name}
              placeholder="Name"
              type="text"
              required
              onChange={(e) => {this.change(e, "name")}}
              id="name-input"
            />
            <input
              value={business}
              placeholder="Business"
              type="text"
              onChange={(e) => {this.change(e, "business")}}
              id="business-input"
            />
            <input
              value={email}
              placeholder="Email Address"
              type="email"
              required
              onChange={(e) => {this.change(e, "email")}}
              id="email-input"
            />
            <table>
              <tr>
                <td>Product</td>
                <td>Quantity</td>
                <td>Frequency</td>
              </tr>
              {
                products.map((a, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <select
                          value={a.product} required
                          onChange={(e) => {this.productChange(e, "product", i)}}
                        >
                          <option value="">Select Product</option>
                          <option value="Prebrewed House Coffee - 64oz">Prebrewed House Coffee - 64oz</option>
                          <option value="Prebrewed House Coffee - 128oz">Prebrewed House Coffee - 128oz</option>
                          <option value="Prebrewed Single Origin Coffee - 64oz">Prebrewed Single Origin Coffee - 64oz</option>
                          <option value="Prebrewed Single Origin Coffee - 128oz">Prebrewed Single Origin Coffee - 128oz</option>
                          <option value="Prebrewed Cold Brew - 2L">Prebrewed House Coffee - 64oz</option>
                          <option value="House Coffee - 12oz Whole Beans">House Coffee - 12oz Whole Beans</option>
                          <option value="House Espresso - 12oz Whole Beans">House Espresso - 12oz Whole Beans</option>
                          <option value="Nicaragua Coffee - 12oz Whole Beans">Nicaragua Coffee - 12oz Whole Beans</option>
                          <option value="Guatemala Coffee - 12oz Whole Beans">Guatemala Coffee - 12oz Whole Beans</option>
                          <option value="Ethiopia Coffee - 12oz Whole Beans">Ethiopia Coffee - 12oz Whole Beans</option>
                          <option value="Burundi Coffee - 12oz Whole Beans">Burundi Coffee - 12oz Whole Beans</option>
                          <option value="Congo Coffee - 12oz Whole Beans">Congo Coffee - 12oz Whole Beans</option>
                        </select>
                      </td>
                      <td>
                        <input
                          value={a.quantity} placeholder="Quantity" required
                          onChange={(e) => {this.productChange(e, "quantity", i)}}
                        />
                      </td>
                      <td>
                        <select
                          value={a.frequency} required
                          onChange={(e) => {this.productChange(e, "frequency", i)}}
                        >
                          <option value="">Select Frequency</option>
                          <option value="One Time">One Time</option>
                          <option value="Everyday">Everyday</option>
                          <option value="Monday through Friday">Monday through Friday</option>
                          <option value="Once a Week">Once a Week</option>
                          <option value="Once a Month">Once a Month</option>
                        </select>
                      </td>
                      <td title="remove product" className="hoverer" onClick={(e) => {this.deleteProduct(e,i)}}>X</td>
                    </tr>
                  )
                })
              }
              <tr>
                <td onClick={this.addProduct} className="hoverer">Add More</td>
              </tr>
            </table>
            <textarea
              value={message}
              placeholder="Please explain specifics here. If we are delivering, include address, time of day, etc. If you would like a once a week or once a month order, please provide day or date you would like it delivered."
              onChange={(e) => {this.change(e, "message")}}
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
        </Subscribe>
      </SubscribeWrap>
    );
  }
}

export default SubscribeComponent;
