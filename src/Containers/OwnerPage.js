import React, { Component } from 'react';
import Table from '../Components/Table';

class OwnerPage extends Component {
    render() {

        const { order } = this.props

        return (

            <div>
                <Table order={order} />
            </div>
        );
    }
}

export default OwnerPage;
