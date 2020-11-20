import React, { Component } from 'react';
import AboutInfo from '../Components/AboutInfo';
import Comments from '../Components/Comments';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar'
import Pricing from '../Components/Pricing';

class About extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Header />
                <AboutInfo/>
                {/* <Comments /> */}
                <Footer />
                
            </>
        );
    }
}

export default About;
