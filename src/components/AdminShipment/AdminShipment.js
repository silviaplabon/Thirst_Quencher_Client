import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AdminShipmentShow from '../AdminShipmentShow/AdminShipmentShow';

import './AdminShipment.css'
const AdminShipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/Order/userAllCollection',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setOrder(data)
                }
            })
    }, [loggedInUser.email])
    console.log(order)


    return (
        <div className="container">
            <ul className=" list-group ulStyle" >
                <li className=" list-group-item liStyle  liHeaderStyle text-white p-2">
                <span className="listStyle ms-2 imageShipStyle">Image</span>
                    <span className="listStyle ms-2 nameShipStyle">Name</span> 
                    <span className="listStyle ms-2 quantityShipStyle text-center">Quantity</span>
                    <span className="listStyle ms-2 priceShipStyle text-center">Price</span>
                      </li>
                    {
                        order.map(book => <AdminShipmentShow book={book}></AdminShipmentShow>)
                    }
                   
            </ul>
        </div>
    );
};

export default AdminShipment;