import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookDetailShow from '../../Home/BookDetailShow/BookDetailShow';
import UserSidebar from '../../Shared/UserSidebar/UserSidebar';
import ShipmentDetailsShow from '../ShipmentDetailsShow/ShipmentDetailsShow';
import './ShipmentDetails.css';

const ShipmentDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/Order/userCollection?email=' + loggedInUser?.email,
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

        <div className="">
        <div className="row ">
            <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xxl-2 p-0">
                <div className="" style={{backgroundColor:'white'}}>
                <UserSidebar></UserSidebar>
                </div>
            </div>
                <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 col-xxl-10   mt-1 shipmentContainerDiv ">
                    <div className="shipmentContainerDesign" >                   
                <h6 className="text-center">
                    Dear {loggedInUser.displayName},Your Order List are following:
                </h6>
                <ul className=" list-group ulStyleShipment "  >
                    <li className=" list-group-item liStyleShipment  liHeaderStyleShipment p-0  text-white ">
                        <span className="listStyleShipment text-center nameStyleShipment">Name</span>
                        {/* <span className="listStyleShipment ms-2 text-center quantityStyleShipment">Quantity</span> */}
                        <span className="listStyleShipment priceStyleShipment  ">Price</span>
                        <span className="listStyleShipment  typeStyleShipment text-center ">Service</span>
                        <span className="listStyleShipment  dateStyleShipment text-center">Date</span>
                        <span className="listStyleShipment  destinationStyleShipment text-center">Address</span>
                    </li>

                    {
                        order.map(book => <ShipmentDetailsShow book={book} ></ShipmentDetailsShow>)
                    }
                </ul>
            </div> </div>
        </div>
        </div>
    );
};

export default ShipmentDetails;