import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const orderurl = 'http://localhost:3000/orders'

class OrderTable extends Component {

    state = {
        orders: []
    }

    getOrders = () => {
        if(localStorage.getItem("token")){
          const headers = {headers: {"Authentication": `Bearer ${localStorage.getItem("token")}`}}
          fetch(orderurl, headers)
          .then(r => r.json())
          .then(order => {
            this.setState({orders: order})
          })
        }
    }


    componentDidMount = () => {
        this.getOrders()
    }

    render() {

        const renderHeader = () => {
            let headerElement = ['order id', 'first name', 'last name', 'email', 'delivery address', 'comments', 'delivery date' ]
    
            return headerElement.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }

        const renderBody = () => {
            return this.state.orders.map(({ id, first_name, last_name, email, address, comments, date }) => {
                return (
                    <tr key={id}>
                        <td><Link to={`/owner/orders/${id}`}>{id}</Link></td>
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{email}</td>
                        <td>{address}</td>
                        <td>{comments}</td>
                        <td>{date}</td>
                        
                        {/* <td class ame='opration'>
                            <button className='button' onClick={() => removeData(id)}>Delete</button>
                        </td> */}
                    </tr>
                )
            })
        }

        return (
            <div >
                <br></br>
                <h1 id='title' >Orders</h1>
                <div className="table">
                   <table id='employee'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody style={{backgroundColor:'white'}}>
                        {renderBody()}
                    </tbody>
                </table>   
                </div>
                 
            </div>
        );
    }
}

export default OrderTable;
