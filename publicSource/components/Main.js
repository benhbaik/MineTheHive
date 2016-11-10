import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span> 
                    </button>
                    <a className="navbar-brand" href="#"><img id="logo" src="./style/img/mthLogo.png" alt=""/></a>
                    <h4>Mine the Hive</h4>
                </div>
                <div className="collapse navbar-collapse">
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
        )
    }
});

export default Main;

                // <span className="glyphicon glyphicon-menu-hamburger"></span>
                //     <a href="/" className="navbar-brand">
                //         <img src="./style/img/mthLogo.png" alt=""/>
                //     </a>
                //      <h1>Mine the Hive</h1>