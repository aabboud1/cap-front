import React, { Component } from 'react';
import MenuCard from './MenuCard';
import { Grid } from 'semantic-ui-react'


class Cart extends Component {
  
  
    render() {

        const { items, removeMyItem } = this.props
        return (
            
          <Grid style={{background:'grey'}} divided inverted padded>
            {items.filter((item) => item.selected).map(item => {
                return <MenuCard 
                  item={item} 
                  key={item.id} 
                  removeMyItem={removeMyItem}
                  disableAdd={true}
                  disableQuantity={false}
                /> })}
          </Grid>
        );
    }
}

export default Cart;
