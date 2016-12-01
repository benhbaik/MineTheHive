import React from 'react';
import { Link } from 'react-router';

const Navbar = React.createClass({
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link id="brand" className="navbar-brand" to="/"><img id="logo" src="./style/img/mthLogo.png" alt=""/></Link>
                            <h4 id="mth">Mine the Hive</h4>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Current</a></li>
                                <li><a href="#">Discourse</a></li>
                                <li><a href="#">Sessions</a></li>
                                <li><a href="#">Enigmas</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
});

export default Navbar;
