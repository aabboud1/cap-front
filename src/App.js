import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Containers/Homepage'
import About from './Containers/About';


const itemsurl = "http://localhost:3000/items"

class App extends Component {

  state = {
    items: []
  }

  getItems = () => {
      fetch(itemsurl)
      .then(r => r.json())
      .then(data => {
        this.setState({items: data})
      })
  }

  componentDidMount = () => {
    this.getItems()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => {
            return(
              <Homepage items={this.state.items}/>
            )}}/>
            <Route exact path='/about' render={() => {
              return(
                <About />
              )
            }} />
        </Switch>
      </Router>
    );
  }
}

export default App;

