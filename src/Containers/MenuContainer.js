import React, { Component } from 'react';
import Cart from '../Components/Cart';
import MenuCard from '../Components/MenuCard';
import Navbar from '../Components/Navbar';

class MenuContainer extends Component {
    render() {
        const { items, removeMyItem, addMyItem } = this.props
        return (
            <>
            <Navbar />
            <Cart items={items} removeMyItem={removeMyItem}/>
            <br></br><br></br>
            <button className="btn btn-primary btn-lg btn-block">Love what you see? Start your order here!</button>
            <br></br><br></br>
            <div className="ui four column grid">
                <div className="row">
                    {items.map(item => {
                        return <MenuCard 
                        item={item} 
                        key={item.id} 
                        addMyItem={addMyItem}/> })}
                </div>
            </div>
            </>
        );
    }
}

export default MenuContainer;
