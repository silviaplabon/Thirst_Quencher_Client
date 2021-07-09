import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookDetailShow from '../../Home/BookDetailShow/BookDetailShow';
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
            <ul className=" list-group ulStyleShipment" >
                                <li className=" list-group-item liStyleShipment  liHeaderStyleShipment text-white p-3">
                                    <span className="listStyle ms-2 nameStyle">Name</span>
                                    <span className="listStyleShipment ms-2 text-center quantityStyleShipment">Quantity</span>
                                    <span className="listStyleShipment ms-2 priceStyleShipment text-center">Price</span>
                                    <span className="listStyleShipment ms-2 typeStyleShipment text-center">Service-Type</span>
                                    <span className="listStyleShipment ms-2 dateStyleShipment text-center">Date</span>
                                    <span className="listStyleShipment ms-2 destinationStyleShipment text-center">Address</span>
                                </li>

            {
                order.map(book => <ShipmentDetailsShow book={book} ></ShipmentDetailsShow>)
            }
            </ul>
        </div>
    );
};

export default ShipmentDetails;