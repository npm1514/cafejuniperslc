import React, { Component } from 'react';
import Catering from '../pages/CateringPage';

class Root extends Component {
    render() {
        return <Catering data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
