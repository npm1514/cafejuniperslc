import React, { Component } from 'react';
import { FourOhFourPage } from '../pages';

class Root extends Component {
    render() {
        return <FourOhFourPage data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
