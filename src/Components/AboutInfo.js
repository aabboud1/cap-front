import React, { Component } from 'react';

class AboutInfo extends Component {
    render() {
        return (
            <div className="about">
                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-sm-8">
                        <h2>Meet the Chef</h2>
                        <h4>Good quality homemade food with love</h4>      
                        <p>Growing up in Morocco I always had a passion for making great tasting exotic mediterainin cuisine. 
                            The food that you order from us is always made fresh and shipped right away to get you the best tasting food.
                        </p>
                        <a href="http://localhost:3001/contact" class="btn btn-default btn-lg">Get in touch with us!</a>
                        </div>
                        <div class="col-sm-4">
                        <span class="glyphicon glyphicon-picture logo"></span>
                        </div>
                    </div>
                    </div>

                    <div class="container-fluid bg-grey">
                    <div class="row">
                        <div class="col-sm-4">
                        <span class="glyphicon glyphicon-cutlery logo"></span>
                        </div>
                        <div class="col-sm-8">
                        <h2>Our Values</h2>
                        <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>      
                        <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutInfo;
