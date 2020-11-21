import React, { Component } from 'react';
import MenuCard from './MenuCard';

class Cart extends Component {
  
  
    render() {

        const { items, removeMyItem } = this.props
        return (
            <div className="ui segment inverted olive bot-army">
            <div className="ui five column grid">
              <div className="row bot-army-row">
              {items.filter((item) => item.selected).map(item => {
                return <MenuCard item={item} key={item.id} removeMyItem={removeMyItem} /> })}
              </div>
            </div>
          </div>
        );
    }
}

export default Cart;
