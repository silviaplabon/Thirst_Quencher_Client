import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import OrderDetailShow from '../OrderDetailShow/OrderDetailShow';
import ShipmentAndPayment from '../ShipmentAndPayment/ShipmentAndPayment';
import './OrderList.css';

const OrderList = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    const [orders,setOrders]=useState([]);
    const history=useHistory();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/user/singleOrderCollection?email='+loggedInUser?.email,
            {
                
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [loggedInUser.email])
  
    const handleCheckout=()=>{
        history.push('/user/ShipmentAndPayment')
    }
    

    
    return (
        <div className="container">
        <div className="col-md-12 formSection m-auto mt-5">
                <div className="">
                <ul className=" list-group ulStyle" >
                    <li className=" list-group-item liStyle  liHeaderStyle text-white p-2">
                        <span className="listStyle imageOrderStyle">Image</span>
                        <span className="listStyle  nameOrderStyle">Name</span>
                        <span className="listStyle  text-center quantityOrderStyle">Quantity</span>
                        <span className="listStyle priceOrderStyle text-center">Price</span>
                        <span className="listStyle text-center">Action</span>

                    </li>
                    {
                        orders.map(order=><OrderDetailShow order={order}></OrderDetailShow>)
                    }
                </ul>
        </div>
              <button className="btn btn-lg mt-5 w-100 text-center text-white" style={{backgroundColor:'#2d524a'}} onClick={openModal} >Proceed To CheckOut</button>
            <ShipmentAndPayment  modalIsOpen={modalIsOpen} closeModal={closeModal} ></ShipmentAndPayment>
        </div>
        </div>
    );
};

export default OrderList;