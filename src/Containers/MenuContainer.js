import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../Components/MenuCard';
import { Grid } from 'semantic-ui-react'
import ScrollArrow from '../Components/ScrollArrow';
import { FaScroll } from 'react-icons/fa';

class MenuContainer extends Component {

    state = {
        cart: []
    }

    render() {
        const { items, addMyItem } = this.props
        return (
            <>
                <Link to="/order" class="btn btn-primary btn-lg btn-block">Like what you see? Click here to start your order!!</Link>
                    <FaScroll/>
                <Grid style={{background:'salmon'}} columns='equal' divided  padded>
                    {items.map(item => {
                            return <MenuCard 
                            item={item} 
                            key={item.id} 
                            addMyItem={addMyItem}
                            disableRemove={true}
                            disableAdd={false}
                            disableQuantity={true}
                            /> })}
                </Grid>
            </>
        );
    }
}

export default MenuContainer;
