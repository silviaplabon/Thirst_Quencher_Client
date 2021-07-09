import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App.js';
import AdminShipmentDetail from '../AdminShipmentDetail/AdminShipmentDetail.js';
import './AdminShipmentShow.css'

const AdminShipmentShow = (props) => {
    const { order, type, destination, orderTime, status, user, _id } = props.book;
    console.log(props)
    const index=props.index;
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [book, setBook] = useState({})

    const handleChange = e => {
        const bookDetails = {
            status: e.target.value

        };


        {
            (loggedInUser.admin == true && loggedInUser.role == "Administrator") &&

                fetch(`https://sleepy-plains-42535.herokuapp.com/statusUpdate/AdminShipment/${_id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            alert('updated this product');
                            if (bookDetails.status == 'Done') {
                                deleteSingleOrder(_id)
                                
                                   document.getElementsByClassName('orderShowAdmin')[index].style.display='none';
                                    
                            }
                        }
                    })
        }

    }
    const deleteSingleOrder = _id => {
        fetch(`https://sleepy-plains-42535.herokuapp.com/deleteUserDoneCollection/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    alert("Confirmed this service and deleted from database")
                }
            })
    }

    return (

        <div className="orderShowAdmin">
            <li className=" list-group-item liStyleAdmin liAdminStyletext-white p-2 mt-1">
                <span className="listStyleAdmin ms-2 emailAdminStyle fontShip">{user}</span>
                <span className="listStyleAdmin ms-2 dateAdminStyle fontShip text-center">{orderTime}</span>
                {/* <span className="listStyle ms-2 destinationAdminStyle fontShip text-center">{destination}</span> */}
                <span className="listStyleAdmin  ms-2 statusAdminStyle text-center fontShip">
                    <select name="status" onChange={handleChange} className=" ms-2 ">
                        {
                            status == "Pending" && <>
                                <option>Pending</option>
                                <option>On Going</option>
                                <option >Done</option>
                            </>
                        }
                        {
                            status == "Done" && <>
                                <option >Done</option>
                                <option>On Going</option>
                                <option >Pending</option>
                            </>
                        }
                        {
                            status == "On Going" && <> <option>On Going</option>
                                <option>Pending</option>
                                <option >Done</option>
                            </>
                        }

                    </select>
                </span>
            </li>



            {
                order.map(detail => <AdminShipmentDetail detail={detail} index={index} time={orderTime} status={status} serviceType={type} address={destination}></AdminShipmentDetail>)
            }

        </div>
    );
};

export default AdminShipmentShow;