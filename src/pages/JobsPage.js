import React, { Component } from 'react';
import { Banner, Header, CoffeeMenu, Parallax, About, Map, Message, Partners, Footer, Delivery } from '../components';
import { JobsWrapper, Toast } from '../styled-components/pages/jobs';
import { Hex } from '../subcomponents';
import { darkblue, green, pink, brown } from '../styled-components/colors';
import jobList from '../data/jobList'

class Jobs extends Component {
    render(){
      const { id } = this.props.data;
      const job = id ? jobList.find(a => a.id == id) : {}
      return (
          <JobsWrapper>
            <Banner id="jobs">
              <a href="/"><img src="/images/Cafe-Juniper_J_01.png" alt="primary logo"/></a>
              <div>
                C<span className="smallLetters">A</span>FÉ JUN<span className="smallLetters">I</span>P<span className="smallLetters">E</span>R
              </div>
              <h1 className="bottomBanner">
                Salt lake city's premier coffee shop
              </h1>
            </Banner>
            <Header/>
            <About id="about">
              <a href="/jobs">
                <h2>{ id ? "BACK TO JOBS PAGE" : "JOBS" }</h2>
              </a>
              <hr/>
              {
                id ?
                <div>
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                </div> :
                <div>
                  <p>These are our available jobs.</p>
                  {
                    jobList.map((job,i) => {
                      return (
                        <a key={i} href={`/jobs/${job.id}`}>
                          <h4>{job.title}</h4>
                        </a>
                      )
                    })
                  }

                </div>
              }
              <hr/>
              <p>For any job inquiries, please submit your resume at <a href="mailto:cafejuniperslc@gmail.com">cafejuniperslc@gmail.com</a></p>
            </About>
            <Parallax url="/images/grub.jpg"/>
            <Message id="contact"/>
            <Partners/>
            <Footer/>
          </JobsWrapper>
      );
    }
}

export default Jobs;
