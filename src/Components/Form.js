import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        street: '',
        city: '',
        date: '',
        email: ''      
    }

    render() {
        return (
            <div>
                <div>
        <form onSubmit={(e) => this.props.createNewOrder(e)}>
          <h2 className="new-job-header">Order Information</h2>
          <div className="form-group">
            <label>
              <h4>Name</h4>
              <input className="job-input"
                    type="text"
                    placeholder="First, Last"
                    value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <h4>Address</h4>
              <input className="job-input"
                    type="text"
                    placeholder="Street"
                    step="0.01"
                    value={this.state.street}
                    onChange={(e) => this.setState({street: e.target.value})}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <h4>Address</h4>
              <input className="job-input"
                    type="text"
                    placeholder="City"
                    step="0.01"
                    value={this.state.city}
                    onChange={(e) => this.setState({city: e.target.value})}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <h4>Delivery Date:</h4>
              <input className="job-input"
                    type="date"
                    value={this.state.date}
                    onChange={(e) => this.setState({date: e.target.value})}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <h4>E-mail Address</h4>
              <input className="job-input"
                    type="email"
                    placeholder="Please enter a valid E-mail"
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
              />
            </label>
          </div>
          <a href="http://localhost:3001/confirm"><input className="btn btn-primary" type="submit" value="Create New Job" /></a>
        </form>
      </div>
            </div>
        );
    }
}

export default Form;
