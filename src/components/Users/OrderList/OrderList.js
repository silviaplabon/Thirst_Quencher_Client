import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DeleteContext, UserContext } from '../../../App';
import OrderDetailShow from '../OrderDetailShow/OrderDetailShow';
import ShipmentAndPayment from '../ShipmentAndPayment/ShipmentAndPayment';
import './OrderList.css';
const OrderList = () => {
    const [deleteUpdate,setDeleteUpdate]=useContext(DeleteContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [count,setCount]=useState(0);
    const [state, setState] = useState(false);
    function openModal() {
        setState(true);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/user/singleOrderCollection?email=' + loggedInUser?.email,
            {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(orders)
            })
    }, [loggedInUser.email])

    const handleCheckout = () => {
        history.push('/user/ShipmentAndPayment')
    }



    return (
        <div className="container">
            <div className="col-md-12 formSection m-auto mt-5">
                <div className="">
                    <ul className=" list-group ulStyleOrder" >
                        <li className="list-group-item liStyleOrder liHeaderStyleOrder text-white p-2">
                            <span className="listStyleOrder imageOrderStyle">Image</span>
                            <span className="listStyleOrder  nameOrderStyle">Name</span>
                            <span className="listStyleOrder  text-center quantityOrderStyle">Quantity</span>
                            <span className="listStyleOrder priceOrderStyle text-center">Price</span>
                            <span className="listStyleOrder text-center">Action</span>

                        </li>
                        {
                            orders.map((order,index) => <OrderDetailShow order={order} index={index}></OrderDetailShow>)
                        }
                    </ul>
                </div>
                <button className="btn btn-lg mt-5 w-100 text-center text-white" style={{ backgroundColor: '#27211D' }} onClick={openModal} >Proceed To CheckOut</button>
                <ShipmentAndPayment modalIsOpen={modalIsOpen} closeModal={closeModal} ></ShipmentAndPayment>
            </div>
        </div>
    );
};

export default OrderList;