import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
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
    }, [loggedInUser])
    // console.log(order)


    return (
        <div className="container adminShipmentContainer p-0 margin-auto" style={{width:'96%'}}>
            <ul className=" list-group ulShipment" >
                <li className=" list-group-item liShipment  liHeaderShipment text-white p-2">
                <span className="listAdminShipment ms-2 imageShipment">Image</span>
                    <span className="listAdminShipment  ms-2 nameShipment">Name</span> 
                    <span className="listAdminShipment  ms-2 quantityShipment text-center">Quantity</span>
                    <span className="listAdminShipment  ms-2 priceShipment text-center">Price</span>
                      </li>
                    {
                        order.map((book,index) => <AdminShipmentShow book={book} index={index}></AdminShipmentShow>)
                    }
                   
            </ul>
        </div>
    );
};

export default AdminShipment;