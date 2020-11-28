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
        street: '',
        city: '',
        state: '',
        zip: ''   
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
            <Grid.Column>
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
                    />
                    <Form.Field
                    id='form-input-control-date'
                    control={Input}
                    name="date"
                    label='Date'
                    placeholder='MM/DD/YYYY'
                    onChange={this.handleChange}
                    value={this.state.date}
                    error={this.state.error}
                  />
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
                <Form.Button 
                            control={Button}
                            onClick={this.props.createNewOrder} 
                            content='Place Order'/>
              </Form>
            </Grid.Column>
          
            
          </Grid>
        );
    }
}

export default OrderForm;