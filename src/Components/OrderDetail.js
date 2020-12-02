import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetail(props) { 
    console.log(props)
    const item = useParams();
    const [orderItems, setOrderItems] = useState([]);

    function getoi() {
        if (localStorage.getItem("token")) {
            const headers = {headers: {"Authentication": `Bearer ${localStorage.getItem("token")}`}}
            fetch(`http://localhost:3000/orders/${item.orderid}`, headers)
            .then(r => r.json())
            .then(order => {
                console.log(order)
                setOrderItems(order)
            })
        }
    }

    useEffect(() => {
        getoi();
    }, []);

    const renderHeader = () => {
        let headerElement = ['name', 'price', 'category', 'quantity']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    
    const renderBody = () => {
        return orderItems.map(({ item_id, name, price, category, quantity }) => {
            return (
                <tr key={item_id}>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{category}</td>
                    <td>{quantity}</td>
                </tr>
            )
        })
    }

    return (
        <div >
            <br></br>
            <h1 id='title' style={{marginLeft:"43%"}}>Order {item.orderid} Details</h1>
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