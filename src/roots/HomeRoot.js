import React, { Component } from 'react';
import { HomePage } from '../pages';

class Root extends Component {
    render() {
        return <HomePage data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
