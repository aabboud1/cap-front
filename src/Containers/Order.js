import React, { Component } from 'react';
import Form from '../Components/Form';


class Order extends Component {
    render() {



        return (
            <div>
                <Form createNewOrder={this.props.createNewOrder}/>
            </div>
        );
    }
}

export default Order;
