import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Homepage from './Containers/Homepage'
import About from './Containers/About';
import Contactus from './Containers/Contactus';
import MenuContainer from './Containers/MenuContainer';
import Order from './Containers/Order';
import Confirm from './Components/Confirm';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import OwnerPage from './Containers/OwnerPage';
import OrderDetail from './Components/OrderDetail';
import LoginForm from './Components/LoginForm'

const itemsurl = "http://localhost:3000/items"
const orderurl = 'http://localhost:3000/orders'


class App extends Component {

  state = {
    items: [],
    cartItems: [],
    orders: [], 
    currentUser: null,
  }
  getCurrentUser = currentUser => this.setState({currentUser})

  getItems = () => {
      fetch(itemsurl)
      .then(r => r.json())
      .then(item => {
        this.setState({items: item})
      })
  }

  componentDidMount = () => {
    this.getItems()
    console.log()
  }
  

  createNewOrder = (data) => {
    const body = {
      ...data,
      items: this.state.cartItems.map((i) => ({
        item_id: i["id"],
        quantity: i["quantity"]
      }))
    };
    
    if (body.items.length) {
      fetch(orderurl, {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
      })
      .then((res) => {
        this.setState({cartItems: []});
        window.location.href = '/home'
      });
    } else {
      window.location.href = '/menu'
    }
  }

  _toggleItemSelection = (id, flag) => {
    for (let i = 0; i < this.state.items.length; i++) {
      let currItem = this.state.items[i];
      if (currItem.id === id) {
        currItem.selected = flag;
        currItem.quantity = 1
      }
    }
    const cartItems = this.state.items.filter((item) => item.selected);
    this.setState({cartItems: cartItems});
  }

  removeMyItem = (id) => {this._toggleItemSelection(id, false)};
  addMyItem = (id) => {this._toggleItemSelection(id, true)}



  render() {
    return (
      <div>
        <Router>
          <Navbar logged_in={ !!localStorage.getItem("token") } getCurrentUser={this.getCurrentUser} />
          <Switch>
            <Route exact path='/home' render={() => {
              return !localStorage.getItem("token")  ? 
                      <Homepage 
                          items={this.state.items} /> :
                      <Redirect to="/owner/orders" />
              }}/>
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
                <div>
                  <Cart items={this.state.cartItems} removeMyItem={this.removeMyItem}/>
                  <MenuContainer  items={this.state.items}
                                  addMyItem={this.addMyItem} />
                  </div>
                )}}/>
              <Route exact path='/order' render={() => {
              return (
                <div>
                  
                  <Cart items={this.state.cartItems} removeMyItem={this.removeMyItem}/>
                  <Order cartItems={this.state.cartItems}
                          createNewOrder={this.createNewOrder} />
                </div>
              )}}/> 
              <Route exact path='/owner/orders' render={() => {
              return !localStorage.getItem("token")  ? <Redirect to="/home" /> : <OwnerPage />
              }}/> 
              <Route path='/owner/orders/:orderid' render={() => {
              return !localStorage.getItem("token")  ? <Redirect to="/home" /> : <OrderDetail />
              }}/>
                       
            <Route exact path="/login" render={()=> {
            return !localStorage.getItem("token") ? <LoginForm getCurrentUser={this.getCurrentUser} /> : <Redirect to='/owner/orders'/>
            }} />
            <Redirect to="/home" />            
          </Switch>
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default  App;

