import React, { Component } from 'react';
class Navbar extends Component {
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
                    <a className="navbar-brand" href="#">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><a href="http://localhost:3001/">Home</a></li>
                        <li><a href="http://localhost:3001/about">About</a></li>
                        <li><a href="http://localhost:3001/contact">Contact</a></li>
                        <li><a href="http://localhost:3001/menu">Menu</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="http://localhost:3001/login"><span className="glyphicon glyphicon-log-in"></span> Admin Login</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
