import React, { Component } from 'react';
import Cart from '../Components/Cart';
import Form from '../Components/Form';

class Order extends Component {
    render() {

        const { cartItems, createNewOrder } = this.props

        return (
            <div>
                <Form cartItems={cartItems} createNewOrder={createNewOrder} />
            </div>
        );
    }
}

export default Order;
