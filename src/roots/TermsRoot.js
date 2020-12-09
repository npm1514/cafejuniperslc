import React, { Component } from 'react';
import { TermsPage } from '../pages';

class Root extends Component {
    render() {
        return <TermsPage data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
