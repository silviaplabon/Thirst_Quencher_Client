import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AdminShipmentDetail.css'


const AdminShipmentDetail = (props) => {
    const { strDrink, price, quantity,strDrinkThumb,status } = props.detail;
    const index=props.index;
                 
useEffect(()=>{
     document.getElementsByClassName('orderShowAdmin')[index].style.display='none';    
    },[status=="Done"])

    return (
        <>
            <ul className="list-group ulAdminShipment orderShowAdmin">
                <li className="list-group-item liAdminShipment  " style={{height:'8rem'}} >
                <span className="listAdminShipment  imageAdminShipment text-white" >
                    <img src={strDrinkThumb} className="imageStyleShip pt-1 ps-1 w-50 h-75 img-fluid " /></span>
                    <span className="listAdminShipment    nameAdminShipment fw-bold " >{strDrink}</span>
                    <span className="listAdminShipment    quantityAdminShipment fw-bold  text-center"  >{quantity}</span>
                    <span className="listAdminShipment   priceAdminShipment fw-bold text-center "  >{price}</span>
                   
                </li>
            </ul>

        </>
    );
};

export default AdminShipmentDetail;