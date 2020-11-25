import React, { Component } from 'react';

const cust = 'http://localhost:3000/orders'

class ContactForm extends Component {

    state = {
        first: '',
        last: '',
        email: ''
    }

    createNewCustomer = (e) => {

    
        fetch(cust, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                first_name: this.state.first,
                last_name: this.state.last,
                email: this.state.email
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
      }

    render() {
        return (
            <div class="container-fluid bg-grey">
                <div class="row">
                    <div class="col-sm-5">
                        <h2 className="text-center">CONTACT US</h2>
                        <p>Please feel free to contact us with any questions or concerns, and we'll get back to you within 24 hours. Thank you.</p>
                        <p><span class="glyphicon glyphicon-map-marker"></span> Baltimore, MD</p>
                        <p><span class="glyphicon glyphicon-phone"></span>(410) 530-3779</p>
                        <p><span class="glyphicon glyphicon-envelope"></span> habibicater@gmail.com</p> 
                    </div>
                    <form onSubmit={(e) => this.createNewCustomer(e)}>
                        <div class="col-sm-7">
                            <h2 class="text-center">JOIN OUR MAILING LIST</h2>
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <input class="form-control" id="first name" 
                                        name="first name" placeholder="First Name" 
                                        type="text"  value={this.state.first}
                                        onChange={(e) => this.setState({first: e.target.value})}
                                        required />
                                </div>
                                <div class="col-sm-6 form-group">
                                <input class="form-control" 
                                        id="last name" name="last name" 
                                        placeholder="Last Name" 
                                        type="text" 
                                        value={this.state.last}
                                        onChange={(e) => this.setState({last: e.target.value})}
                                        required />
                                </div>
                            </div>
                            <input className="form-control" 
                                    id="email" name="emal" 
                                    placeholder="Email" 
                                    type="email" 
                                    value={this.state.email}
                                    onChange={(e) => this.setState({email: e.target.value})}
                                    required />
                            <div class="row">
                                <div class="col-sm-12 form-group">
                                <a href="http://localhost:3001/confirm"><input className="btn btn-success btn-block" type="submit" value="Join" /></a>
                                </div>
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;
