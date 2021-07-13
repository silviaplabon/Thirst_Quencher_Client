import React from 'react';
import './BookDetailShow.css'

const BookDetailShow = (props) => {
    const {strDrink,price,quantity}=props.detail;
//   console.log(props)
    return (
        <>
            <ul className="list-group ulStyleShipment ">
                <li className="list-group-item  liStyleShipment">
                    <span className="listStyleShipment  nameStyleShipment  ">{strDrink}</span>
                    {/* <span className="listStyleShipment  quantityStyleShipment  text-center">{quantity}</span> */}
                    <span className="listStyleShipment  priceStyleShipment  text-center ms-2">{price}</span>
                    <span className="listStyleShipment  typeStyleShipment  text-center ms-2">{props.serviceType}</span>
                    <span className="listStyleShipment  dateStyleShipment  text-center ms-2">{props.time}</span>
                    <span className="listStyleShipment  destinationStyleShipment  text-center ms-2">{props.address}</span>
                </li>
            </ul>

        </>
    );
};

export default BookDetailShow;