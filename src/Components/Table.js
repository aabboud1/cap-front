import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class OrderTable extends Component {

    

    render() {

        const { order } = this.props

        const renderHeader = () => {
            let headerElement = ['order id', 'first name', 'last name', 'email', 'delivery address', 'comments', 'delivery date' , 'order status']
    
            return headerElement.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }

        const renderBody = () => {
            return order && order.map(({ id, first_name, last_name, email, address, comments, date, status }) => {
                return (
                    <tr key={id}>
                        <td><Link to={`/owner/orders/${id}`}>{id}</Link></td>
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{email}</td>
                        <td>{address}</td>
                        <td>{comments}</td>
                        <td>{date}</td>
                        <td>{status}</td>
                        {/* <td class ame='opration'>
                            <button className='button' onClick={() => removeData(id)}>Delete</button>
                        </td> */}
                    </tr>
                )
            })
        }

        console.log(order)

        return (
            <div>
                <h1 id='title'>Orders</h1>
                <table id='employee'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>   
            </div>
        );
    }
}

export default OrderTable;
