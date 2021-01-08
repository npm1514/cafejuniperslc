import React, { Component } from 'react';
import { SitemapPage } from '../pages';

class Root extends Component {
    render() {
        return <SitemapPage data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
