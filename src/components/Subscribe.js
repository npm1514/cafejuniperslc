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
      address: "",
      zip: "",
      phone: "",
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
        address: "",
        zip: "",
        phone: "",
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
        address: "",
        zip: "",
        phone: "",
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
    const { name, business, email, message, products, address, zip, phone } = this.state;
    return (
      <SubscribeWrap id="subscribe">
        <br/>
        <Subscribe>
          <h2>Submit your subscription/catering request below.</h2>
          <p style={{color: "#fff"}}>Timelines will be indefinite and subscriptions will end on written notification.</p>
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
              placeholder="Business (if applicable)"
              type="text"
              onChange={(e) => {this.change(e, "business")}}
              id="business-input"
            />
            <input
              value={address}
              placeholder="Address"
              type="text"
              required
              onChange={(e) => {this.change(e, "address")}}
              id="address-input"
            />
            <input
              value={zip}
              placeholder="Zip Code"
              type="text"
              required
              onChange={(e) => {this.change(e, "zip")}}
              id="zip-input"
            />
            <input
              value={phone}
              placeholder="Phone Number"
              type="text"
              required
              onChange={(e) => {this.change(e, "phone")}}
              id="phone-input"
            />
            <input
              value={email}
              placeholder="Email Address"
              type="email"
              required
              onChange={(e) => {this.change(e, "email")}}
              id="email-input"
            />
            <div style={{color:"#fff", marginTop: "12px"}}>SELECTED PRODUCTS</div>
              {
                products.map((a, i) => {
                  return (
                    <div key={i} className="productBox">
                      <div>
                        <select
                          value={a.product} required
                          onChange={(e) => {this.productChange(e, "product", i)}}
                        >
                          <option value="">Select Product</option>
                          <option value="Prebrewed House Coffee - 16oz">Prebrewed House Coffee - 16oz</option>
                          <option value="Prebrewed House Coffee - 32oz">Prebrewed House Coffee - 32oz</option>
                          <option value="Prebrewed House Coffee - 64oz">Prebrewed House Coffee - 64oz</option>
                          <option value="Prebrewed House Coffee - 128oz">Prebrewed House Coffee - 128oz</option>
                          <option value="Prebrewed Single Origin Coffee - 16oz">Prebrewed Single Origin Coffee - 32oz</option>
                          <option value="Prebrewed Single Origin Coffee - 32oz">Prebrewed Single Origin Coffee - 32oz</option>
                          <option value="Prebrewed Single Origin Coffee - 64oz">Prebrewed Single Origin Coffee - 64oz</option>
                          <option value="Prebrewed Single Origin Coffee - 128oz">Prebrewed Single Origin Coffee - 128oz</option>
                          <option value="Cold Brew - 32oz">Cold Brew - 32oz</option>
                          <option value="Cold Brew - 64oz">Cold Brew - 64oz</option>
                          <option value="Cold Brew - 128oz">Cold Brew - 128oz</option>
                          <option value="Prebrewed Tea - 64oz">Prebrewed Tea - 32oz</option>
                          <option value="Prebrewed Tea - 64oz">Prebrewed Tea - 64oz</option>
                          <option value="Prebrewed Tea - 128oz">Prebrewed Tea - 128oz</option>
                          <option value="House Coffee - 12oz Whole Beans">House Coffee - 12oz Whole Beans</option>
                          <option value="House Espresso - 12oz Whole Beans">House Espresso - 12oz Whole Beans</option>
                          <option value="Nicaragua Coffee - 12oz Whole Beans">Nicaragua Coffee - 12oz Whole Beans</option>
                          <option value="Guatemala Coffee - 12oz Whole Beans">Guatemala Coffee - 12oz Whole Beans</option>
                          <option value="Ethiopia Coffee - 12oz Whole Beans">Ethiopia Coffee - 12oz Whole Beans</option>
                          <option value="Burundi Coffee - 12oz Whole Beans">Burundi Coffee - 12oz Whole Beans</option>
                          <option value="Congo Coffee - 12oz Whole Beans">Congo Coffee - 12oz Whole Beans</option>
                        </select>
                      </div>
                        <input
                          value={a.quantity} placeholder="Quantity" required
                          onChange={(e) => {this.productChange(e, "quantity", i)}}
                        />
                        <select
                          value={a.frequency} required
                          onChange={(e) => {this.productChange(e, "frequency", i)}}
                        >
                          <option value="">Select Frequency</option>
                          <option value="One Time">One Time</option>
                          <option value="Everyday">Everyday</option>
                          <option value="Monday through Friday">Monday - Friday</option>
                          <option value="Once a Week">Once a Week</option>
                          <option value="Once a Month">Once a Month</option>
                        </select>
                      <div title="remove product" className="removeButton hoverer" onClick={(e) => {this.deleteProduct(e,i)}}>X REMOVE PRODUCT</div>
                    </div>
                  )
                })
              }
            <div onClick={this.addProduct} className="addButton hoverer">+ ADD PRODUCT</div>
            <br/>
            <textarea
              value={message}
              placeholder="Please provide more details if necessary here. Is there a time of day that works best for you? If you would like a once a week or once a month order, please provide day or date you would like it delivered."
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
          <a target="_blank" href="/terms"><p style={{color: "#fff"}}>Terms and Conditions</p></a>
        </Subscribe>
      </SubscribeWrap>
    );
  }
}

export default SubscribeComponent;
