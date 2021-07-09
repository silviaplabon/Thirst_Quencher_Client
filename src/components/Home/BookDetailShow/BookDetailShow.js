import React from 'react';
import './BookDetailShow.css'

const BookDetailShow = (props) => {
    const {strDrink,price,quantity}=props.detail;
//   console.log(props)
    return (
        <>
            <ul className="list-group ulStyleShipment ">
                <li className="list-group-item  liStyleShipment">
                    <span className=" listStyleShipment  nameStyleShipment fw-bold">{strDrink}</span>
                    <span className="listStyleShipment  quantityStyleShipment fw-bold text-center">{quantity}</span>
                    <span className="listStyleShipment  priceStyleShipment fw-bold text-center">{price}</span>
                    <span className="listStyleShipment  typeStyleShipment fw-bold text-center">{props.serviceType}</span>
                    <span className="listStyleShipment  dateStyleShipment fw-bold text-center">{props.time}</span>
                    <span className="listStyleShipment  destinationStyleShipment fw-bold text-center">{props.address}</span>
                </li>
            </ul>

        </>
    );
};

export default BookDetailShow;