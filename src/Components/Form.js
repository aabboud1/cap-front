import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Select, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class OrderForm extends Component {

    state = {
        first_name: '',
        last_name: '',
        address: '',
        date: '',
        email: '', 
        comments: '',
        error: false,
    }
    
    handleChange = (e, { name, value }) => {
      this.setState({ [name]: value });
    };

    handleaddress = () => {
      var address = this.state.street + this.state.city
      this.setState({address: address })
    }

    render() {
        const { createNewOrder } = this.props;


        return (
          
            <Grid centered columns={2} padded>
            <Grid.Column className='for'>
              <Form widths='equal'>
                <Form.Group>
                  <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    name="first_name"
                    label='First name'
                    placeholder='First name'
                    onChange={this.handleChange}
                    value={this.state.first_name}
                    error={this.state.error}
                    required={true}
                  />
                  <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    name="last_name"
                    label='Last name'
                    placeholder='Last name'
                    onChange={this.handleChange}
                    value={this.state.last_name}
                    error={this.state.error}
                    required={true}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Field
                      id='form-input-control-error-email'
                      control={Input}
                      label='Email'
                      name='email'
                      placeholder='joe@schmoe.com'
                      onChange={this.handleChange}
                      value={this.state.email}
                      error={this.state.error}
                      required={true}
                    />
                    <label>Date
                      <input className="form-control" 
                        type="date"
                        value={this.state.date}
                        onChange={(e) => this.setState({date: e.target.value})}
                        required />
                    </label>
                   
                </Form.Group>
                <Form.Group >
                  <Form.Field
                    id='form-input-control-address'
                    control={Input}
                    name="address"
                    label='Address'
                    placeholder='Street'
                    onChange={this.handleChange}
                    value={this.state.address}
                    error={this.state.error}
                  />
                  <Form.Field
                    id='form-input-control-address'
                    control={Input}
                    name="city"
                    label='City'
                    placeholder='City'
                    onChange={this.handleChange}
                    value={this.state.city}
                    error={this.state.error}
                  />
                  <Form.Field
                    id='form-input-control-address'
                    control={Input}
                    name="state"
                    label='State'
                    placeholder='State'
                    onChange={this.handleChange}
                    value={this.state.state}
                    error={this.state.error}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Field
                      id='form-input-control-comments'
                      control={TextArea}
                      name="comments"
                      label='Comments'
                      placeholder='250 Characters Max'
                      onChange={this.handleChange}
                      value={this.state.comments}
                      error={this.state.error}
                    />
                </Form.Group>
                  <button className="btn btn-success btn-block btn-lg" type="button" onClick={() => {createNewOrder(this.state)}}>
                  Submit Order </button>
              </Form>
            </Grid.Column>
          
            
          </Grid>
          
          
        );
    }
}

export default OrderForm;