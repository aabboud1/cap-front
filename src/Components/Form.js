import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {

    state = {
        first_name: '',
        last_name: '',
        address: '',
        date: '',
        email: '', 
        comments: ''     
    }
    
    render() {
        const { createNewOrder } = this.props;

        return (
            <form style={{backgroundColor:'lavender'}}>
              <h1 style={{textAlign:"center", backgroundColor:'lavender'}}>Order Information</h1>
              <div>
                <div>
                  <label>First Name</label>
                  <input className="form-control"
                        type="text"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={(e) => this.setState({first_name: e.target.value})}
                  />
                </div>
                <div>
                    <label>Last Name</label>
                    <input className="form-control"
                          type="text"
                          placeholder="Last Name"
                          value={this.state.last_name}
                          onChange={(e) => this.setState({last_name: e.target.value})}
                    />
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                  <input className="form-control"
                        type="text"
                        placeholder="Street, City, State, Zip Code"
                        step="0.01"
                        value={this.state.address}
                        onChange={(e) => this.setState({address: e.target.value})}
                  />
              </div>
              <div className="form-group">
                <label>Delivery Date</label>
                  <input className="form-control" 
                        type="date"
                        value={this.state.date}
                        onChange={(e) => this.setState({date: e.target.value})}
                  />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                  <input className="form-control"
                        type="email"
                        placeholder="Please enter a valid E-mail"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                  />
              </div>
              <label for="comment"> Comments</label>
              <div className="form-group">
                  <textarea className="md-textarea form-control"
                        rows='5'
                        id='comment'
                        placeholder="250 Characters or less"
                        value={this.state.comments}
                        onChange={(e) => this.setState({comments: e.target.value})}
                  />
              </div>
              <button className="btn btn-success btn-block btn-lg" type="button" onClick={() => createNewOrder(this.state)}>
                Submit Order </button>
            </form>
        );
    }
}

export default Form;
