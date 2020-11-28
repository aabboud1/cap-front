import React, { Component } from 'react';
import OrderTable from '../Components/Table';

class OwnerPage extends Component {
    render() {

        const { order } = this.props

        return (

            <div>
                <OrderTable order={order} />
            </div>
        );
    }
}

export default OwnerPage;
