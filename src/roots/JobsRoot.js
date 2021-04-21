import React, { Component } from 'react';
import { JobsPage } from '../pages';

class Root extends Component {
    render() {
        return <JobsPage data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
