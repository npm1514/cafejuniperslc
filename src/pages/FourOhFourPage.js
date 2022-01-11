import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { FourOhFourContent } from '../styled-components/pages/fourohfour';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class FourOhFour extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <FourOhFourContent>
                  <h2>Error [404] Oh No - Its the Cafe Juniper Coffee Dance!</h2>
                  <h2>It looks like you need a cup of coffee!</h2>
                  <a href="/"><Button>Let's Get You Back to Cafe Juniper!</Button></a>
                  <br/>
                  <img src="/images/needcoffee.webp"/>
                </FourOhFourContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default FourOhFour;
