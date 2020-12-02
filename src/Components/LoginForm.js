import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Input, Grid } from 'semantic-ui-react'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
    loading: false,
    error: false,
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleLoginSubmit = async () => {
    this.setState({loading: true});
    const {username, password} = this.state 

    const credentials = {username, password}

    const reqPackage = {}
      reqPackage.headers = {"Content-Type": "application/json"}
      reqPackage.method = "POST"
      reqPackage.body = JSON.stringify(credentials)

    try {
        const res = await fetch(`http://localhost:3000/api/v1/login`, reqPackage)
        this.setState({loading: false});
        const data = await res.json()
        if(data.authenticated) {
            console.log(data)
            localStorage.setItem("token", data.token)
            this.props.getCurrentUser(data.user)
        } else {
            this.setState({error: true});
        }   
    } catch(e) {
        this.setState({loading: false});
    }
  };

  render() {
    return (
        <Grid centered columns={2} padded>
            <Grid.Column>
                <Form loading={this.state.loading}>
                    <Form.Group widths='equal'>
                        <Form.Field 
                            control={Input}
                            label='Username' 
                            onChange={this.handleChange}
                            name="username"
                            placeholder='Username'
                            error={this.state.error}
                            value={this.state.username} />
                        <Form.Field 
                            control={Input}
                            label="Password"
                            name="password"
                            type="password"
                            placeholder='Password'
                            onChange={this.handleChange}
                            value={this.state.password}
                            error={this.state.error}
                        />
                    </Form.Group>
                    <Form.Button 
                            control={Button}
                            onClick={this.handleLoginSubmit} 
                            content='Login'/>
                </Form>
            </Grid.Column>
        </Grid>
    );
  }
}

export default withRouter(LoginForm);
