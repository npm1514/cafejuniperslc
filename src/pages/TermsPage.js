import React, { Component } from 'react';
import { Header, About, Footer } from '../components';
import { TermsWrapper } from '../styled-components/pages/terms';

class Terms extends Component {
    render(){
      return (
          <TermsWrapper>
            <Header/>
            <About noLogo noHexes>
              <h2>Terms and Conditions</h2>
              <p>No refunds will be given on any purchase. All sales are final.</p>
              <p>Product purchase prices may be modified or changed without customer notification.</p>
              <h2>Subscription Program</h2>
              <p>All subscriptions are recurring unless cancelled. If subscription is cancelled, services will render until the end of the payment cycle.</p>
              <p>If no other specific details are provided, we will deliver to your address between 8am and 10am.</p>
              <p>Weekly subscriptions will start on Monday. Monthly subscriptions will start on the first.</p>
              <p>16oz drinks will be delivered via disposable cup. Larger sizes will be delivered in a reusable container. On drop off, those reusable containers will be collected. Any container damaged or lost will be charged against your account.</p>
            </About>
            <Footer/>
          </TermsWrapper>
      );
    }
}

export default Terms;
