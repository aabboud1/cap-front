import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutInfo extends Component {
    render() {
        return (
            <div className="about">
                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-sm-8" style={{backgroundColor: "#043a37"}}>
                        <h2>Meet the Chef</h2>
                        <h4>Good quality homemade food with love</h4>      
                        <p>Growing up in Morocco I always had a passion for making great tasting exotic mediterainin cuisine. 
                            The food that you order from us is always made fresh and shipped right away to get you the best tasting food.
                        </p>
                        <Link to="/contact" class="btn btn-default btn-lg">Get in touch with us!</Link>
                        </div>
                        <div class="col-sm-4">
                        <span class="glyphicon glyphicon-picture logo"></span>
                        </div>
                    </div>
                    </div>

                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-4">
                        <span class="glyphicon glyphicon-cutlery logo"></span>
                        </div>
                        <div class="col-sm-8" style={{backgroundColor: "#043a37"}}>
                        <h2>Our Values</h2>
                        <h4><strong> Fresh food amazing tasting food</strong></h4>      
                        <p><strong>Take a trip to Morocco with one bite</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutInfo;
