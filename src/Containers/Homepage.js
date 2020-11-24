import React, { Component } from 'react';
// import Calendar from '../Components/Calendar'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'
import MenuContainer from './MenuContainer';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                    <h1>Homepage</h1>
                <Footer />
            </div>
        );
    }
}

export default Homepage;
