import React, { Component } from 'react';

class Pricing extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="text-center">
                    <h2>Pricing</h2>
                    <h4>Basic Package Pricing</h4>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                    <div class="panel panel-default text-center">
                        <div class="panel-heading">
                        <h1>Basic</h1>
                        </div>
                        <div class="panel-body">
                        <p><strong>2</strong> Main Dishes</p>
                        <p><strong>5</strong> Side Dishes</p>
                        <p><strong>2</strong> Desserts</p>
                        <p><strong>1</strong> Special Item</p>
                        </div>
                        <div class="panel-footer">
                        <h3>$20</h3>
                        <h4></h4>
                        <button class="btn btn-lg">Sign Up</button>
                        </div>
                    </div> 
                    </div> 
                    <div class="col-sm-4">
                    <div class="panel panel-default text-center">
                        <div class="panel-heading">
                        <h1>Pro</h1>
                        </div>
                        <div class="panel-body">
                        <p><strong>50</strong> Lorem</p>
                        <p><strong>25</strong> Ipsum</p>
                        <p><strong>10</strong> Dolor</p>
                        <p><strong>5</strong> Sit</p>
                        <p><strong>Endless</strong> Amet</p>
                        </div>
                        <div class="panel-footer">
                        <h3>$29</h3>
                        <h4>per month</h4>
                        <button class="btn btn-lg">Sign Up</button>
                        </div>
                    </div> 
                    </div> 
                <div class="col-sm-4">
                    <div class="panel panel-default text-center">
                        <div class="panel-heading">
                        <h1>Premium</h1>
                        </div>
                        <div class="panel-body">
                        <p><strong>100</strong> Lorem</p>
                        <p><strong>50</strong> Ipsum</p>
                        <p><strong>25</strong> Dolor</p>
                        <p><strong>10</strong> Sit</p>
                        <p><strong>Endless</strong> Amet</p>
                        </div>
                        <div class="panel-footer">
                        <h3>$49</h3>
                        <h4>per month</h4>
                        <button class="btn btn-lg">Sign Up</button>
                        </div>
                    </div> 
                    </div> 
                </div>
            </div>
        );
    }
}

export default Pricing;
