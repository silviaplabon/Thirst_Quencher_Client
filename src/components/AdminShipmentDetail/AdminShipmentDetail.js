import React, { useEffect, useState } from 'react';
import './AdminShipmentDetail';
import { useForm } from 'react-hook-form';


const AdminShipmentDetail = (props) => {
    // console.log(props,"adminship")
    const { strDrink, price, quantity,strDrinkThumb,status } = props.detail;
    const index=props.index;
                 
//     // const { displayName, email, PaymentMethod, _id,status } = booking;
//     const newtime=new Date().toDateString();
// console.log(newtime)
useEffect(()=>{
     document.getElementsByClassName('orderShowAdmin')[index].style.display='none';    
    
    },[status=="Done"])

    return (
        <>
            <ul className="list-group ulStyle orderShowAdmin">
                <li className="list-group-item liStyle  liShipmentDetail" style={{height:'8rem'}}>
                <span className="listStyle imageShipStyle "><img src={strDrinkThumb} className="imageStyleShip w-50 h-75 " /></span>
                    <span className=" listStyle  nameShipStyle fw-bold">{strDrink}</span>
                    <span className="listStyle  quantityShipStyle fw-bold text-center">{quantity}</span>
                    <span className="listStyle  priceShipStyle fw-bold text-center">{price}</span>
                   
                </li>
            </ul>

        </>
    );
};

export default AdminShipmentDetail;