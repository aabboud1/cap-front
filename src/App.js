import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Containers/Homepage'
import About from './Containers/About';
import Contactus from './Containers/Contactus';
import MenuContainer from './Containers/MenuContainer';
import Order from './Containers/Order';


const itemsurl = "http://localhost:3000/items"
const orderurl = 'http://localhost:3000/orders'

class App extends Component {

  state = {
    items: [],
    cartItems: []
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

  removeMyItem = (id) => {this._toggleItemSelection(id, false)};
  addMyItem = (id) => {
      this._toggleItemSelection(id, true)
      this.setState({cartItems: id})};

    createNewOrder = (e) => {
      fetch(orderurl, {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json'
              // 'Authentication': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ 
              // name: e.target.elements[0].value,
              // price: e.target.elements[1].value,
              // deadline: e.target.elements[2].value
          })
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
      })

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
                              disableAdd={false}
                              disableRemove={false}/>
            )}}/>
            <Route exact path='/order' render={() => {
            return(
              <Order createNewOrder={this.createNewOrder}/>
            )}}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

