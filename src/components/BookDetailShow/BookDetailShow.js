import React from 'react';
import './BookDetailShow.css'

const BookDetailShow = (props) => {
    const {strDrink,price,quantity}=props.detail;
//   console.log(props)
    return (
        <>
            <ul className="list-group ulStyle ">
                <li className="list-group-item  liStyle">
                    <span className=" listStyle  nameStyle fw-bold">{strDrink}</span>
                    <span className="listStyle  quantityStyle fw-bold text-center">{quantity}</span>
                    <span className="listStyle  priceStyle fw-bold text-center">{price}</span>
                    <span className="listStyle  typeStyle fw-bold text-center">{props.serviceType}</span>
                    <span className="listStyle  dateStyle fw-bold text-center">{props.time}</span>
                    <span className="listStyle  destinationStyle fw-bold text-center">{props.address}</span>
                </li>
            </ul>

        </>
    );
};

export default BookDetailShow;