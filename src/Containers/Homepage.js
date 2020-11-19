import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        );
    }
}

export default Homepage;
