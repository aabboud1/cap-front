import React, { Component } from 'react';


const cust = 'http://localhost:3000/orders'


class Form extends Component {

    state = {
        first: '',
        last: '',
        address: '',
        date: '',
        email: '', 
        comments: ''     
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
              address: this.state.address,
              comments: this.state.comments,
              date: this.state.date,
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
            <form style={{backgroundColor:'lavender'}} onSubmit={(e) => this.createNewCustomer(e)}>
              <h1 style={{textAlign:"center", backgroundColor:'lavender'}}>Order Information</h1>
              <div>
                <div>
                  <label>First Name</label>
                  <input className="form-control"
                        type="text"
                        placeholder="First Name"
                        value={this.state.first}
                        onChange={(e) => this.setState({first: e.target.value})}
                  />
                </div>
                <div>
                    <label>Last Name</label>
                    <input className="form-control"
                          type="text"
                          placeholder="Last Name"
                          value={this.state.last}
                          onChange={(e) => this.setState({last: e.target.value})}
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
              <a href="http://localhost:3001/confirm"><input className="btn btn-success btn-block btn-lg" type="submit" value="Submit Order" /></a>
            </form>
        );
    }
}

export default Form;
