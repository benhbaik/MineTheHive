import React from 'react';
import { Link } from 'react-router';

import Navbar from './Navbar';
import MainGrid from './MainGrid';

const Main = React.createClass({
    render() {
        return (
            <div>
                <Navbar />
                { React.cloneElement(this.props.children, this.props) }
            </div>
        )
    }
});

export default Main;
