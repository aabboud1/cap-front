import React, { Component } from 'react';
import Cart from '../Components/Cart';
import OrderForm from '../Components/Form';

class Order extends Component {
    render() {

        const { cartItems, createNewOrder } = this.props

        return (
            <div>
                <OrderForm cartItems={cartItems} createNewOrder={createNewOrder} />
            </div>
        );
    }
}

export default Order;
