import React, { Component } from 'react';
import { Banner, Header, CoffeeMenu, Parallax, About, Map, Message, Partners, Footer, Delivery } from '../components';
import { JobsWrapper, Toast } from '../styled-components/pages/jobs';
import { Hex } from '../subcomponents';
import { darkblue, green, pink, brown } from '../styled-components/colors';
import jobList from '../data/jobList'

class Jobs extends Component {
    scroll = (id) => {
      if(id == "home"){
        window.location.href = "/"
      } else {
        window.location.href = "/" + id;
      }
    }
    render(){
      const { id } = this.props.data;
      const job = id ? jobList.find(a => a.id == id) : {}
      return (
          <JobsWrapper>
            <Banner id="jobs"/>
            <Header scroll={this.scroll}/>
            <About id="about">
              <a href="/jobs">
                <h2>{ id ? "BACK TO JOBS PAGE" : "CAFE JUNIPER JOBS" }</h2>
              </a>
              <hr/>
              {
                id ?
                <div>
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                </div> :
                <div>
                  {
                    jobList.length ?
                    <p>These are the available jobs at Cafe Juniper.</p> :
                    <p>There are no available jobs currently at Cafe Juniper.</p>
                  }

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
              <p>For any {jobList.length ? "" : "other "}job inquiries, please submit your resume at <a href="mailto:cafejuniperslc@gmail.com">cafejuniperslc@gmail.com</a></p>
            </About>
            <Parallax url="/images/grub.webp"/>
            <Message id="contact"/>
            <Footer/>
          </JobsWrapper>
      );
    }
}

export default Jobs;
