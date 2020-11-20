import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Containers/Homepage'
import About from './Containers/About';
import Contactus from './Containers/Contactus';
import MenuContainer from './Containers/MenuContainer';
import Order from './Containers/Order';


const itemsurl = "http://localhost:3000/items"

class App extends Component {

  state = {
    items: []
  }

  getItems = () => {
      fetch(itemsurl)
      .then(r => r.json())
      .then(item => {
        this.setState({items: item})
      })
  }

  componentDidMount = () => {
    this.getItems()
  }

  _toggleItemSelection = (id, flag) => {
    for (let i = 0; i < this.state.items.length; i++) {
      let currItem = this.state.items[i];
      if (currItem.id === id) {
        currItem.selected = flag;
      }
    }
    this.setState({items: this.state.items});
  }

  removeMyItem = (id) => this._toggleItemSelection(id, false);
  addMyItem = (id) => this._toggleItemSelection(id, true);


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
            <Route exact path='/contact' render={() => {
              return(
                <Contactus />
              )
            }} />
             <Route exact path='/menu' render={() => {
            return(
              <MenuContainer items={this.state.items}
                              removeMyItem={this.removeMyItem}
                              addMyItem={this.addMyItem}
                              disableAdd={true}
                              disableRemove={true}/>
            )}}/>
            <Route exact path='/order' render={() => {
            return(
              <Order items={this.state.items}
                     removeMyItem={this.removeMyItem}
                     addMyItem={this.addMyItem}
                     disableAdd={false}
                     disableRemove={false}/>
            )}}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

