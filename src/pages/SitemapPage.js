import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { SitemapContent } from '../styled-components/pages/sitemap';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Sitemap extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <SitemapContent>
                  <h1>Cafe Juniper Sitemap</h1>
                  <a href="/"><div>Home</div></a>
                  <a href="/about"><div>About</div></a>
                  <a href="/order"><div>Online Ordering</div></a>
                  <a href="/map"><div>Location</div></a>
                  <a href="/contact"><div>Contact</div></a>
                  <a href="/catering"><div>Catering</div></a>
                  <a href="/subscriptions"><div>Subscriptions</div></a>
                  <a href="/terms"><div>Subscription Terms</div></a>
                  <a href="/sitemap"><div>Sitemap</div></a>
                  <a href="/404"><div>404</div></a>
                </SitemapContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Sitemap;
