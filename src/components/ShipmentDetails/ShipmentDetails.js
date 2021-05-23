import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BookDetailShow from '../BookDetailShow/BookDetailShow';
import ShipmentDetailsShow from '../ShipmentDetailsShow/ShipmentDetailsShow';
import './ShipmentDetails.css';

const ShipmentDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/Order/userCollection?email='+loggedInUser?.email,
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
    // console.log(order)


    return (
        <div className="container">
            <h5 className="text-center">
                Dear {loggedInUser.displayName},Your Order List are following:
            </h5>
            <ul className=" list-group ulStyle" >
                                <li className=" list-group-item liStyle  liHeaderStyle text-white p-3">
                                    <span className="listStyle ms-2 nameStyle">Name</span>
                                    <span className="listStyle ms-2 text-center quantityStyle">Quantity</span>
                                    <span className="listStyle ms-2 priceStyle text-center">Price</span>
                                    <span className="listStyle ms-2 typeStyle text-center">Service-Type</span>
                                    <span className="listStyle ms-2 dateStyle text-center">Date</span>
                                    <span className="listStyle ms-2 destinationStyle text-center">Address</span>
                                </li>

            {
                order.map(book => <ShipmentDetailsShow book={book} ></ShipmentDetailsShow>)
            }
            </ul>
        </div>
    );
};

export default ShipmentDetails;