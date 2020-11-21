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
            <a href="http://localhost:3001/order" class="btn btn-primary btn-lg btn-block">Like what you see? Click here to start your order!!</a>
            <br></br><br></br>
            <div className="ui four column grid">
                <div className="row">
                    {items.map(item => {
                        return <MenuCard 
                        item={item} 
                        key={item.id} 
                        addMyItem={addMyItem}
                        disableAdd={this.props.disableAdd}
                        disableRemove={this.props.disableRemove} /> })}
                </div>
            </div>
            </>
        );
    }
}

export default MenuContainer;
