import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Components/Cart';
import MenuCard from '../Components/MenuCard';
import Navbar from '../Components/Navbar';

class MenuContainer extends Component {

    state = {
        cart: []
    }

    render() {
        const { items, addMyItem } = this.props
        return (
            <>
            <br></br><br></br>
            <Link to="/order" class="btn btn-primary btn-lg btn-block">Like what you see? Click here to start your order!!</Link>
            <br></br><br></br>
            <div className="ui four column grid">
                <div className="row">
                    {items.map(item => {
                        return <MenuCard 
                        item={item} 
                        key={item.id} 
                        addMyItem={addMyItem}
                        disableRemove={true}
                        disableAdd={false}
                        disableQuantity={true}
                        /> })}
                </div>
            </div>
            </>
        );
    }
}

export default MenuContainer;
