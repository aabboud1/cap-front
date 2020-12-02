import React, { Component } from 'react';
import Carousel from './Carousel';

class Header extends Component {
    render() {
        return (
           
                <div class="jumbotron text-center">
                    <h1>Habibi's Kitchen</h1>
                    <Carousel />
                    <p style={{color:"white"}}>From our kitchen to your table</p> 
                </div>
            
        );
    }
}

export default Header;
