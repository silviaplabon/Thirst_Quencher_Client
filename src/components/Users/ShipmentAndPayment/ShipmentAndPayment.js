import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import ProcessPayment from '../../Shared/ProcessPayment/ProcessPayment'
import { UserContext } from '../../../App';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcMastercard, faPaypal, faCcPaypal } from '@fortawesome/free-brands-svg-icons'

import { noAuto } from '@fortawesome/fontawesome-svg-core';
import './ShipmentAndPayment.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        paddingTop: '40px',
        marginTop: '0px',
        width: '60%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.96)'
    }
};

Modal.setAppElement('#root')

const ShipmentAndPayment = ({ modalIsOpen, closeModal }) => {
    const history = useHistory();
    const { id } = useParams();
    const [service, setService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookData, setBookData] = useState(null)
    const { register, handleSubmit, watch, errors } = useForm();
    const { displayName, email } = loggedInUser;
    const [info, setInfo] = useState({});
    const [state, setState] = useState(null);
    const [radio, setRadio] = useState('Credit Card');
    const [serviceType, setServiceType] = useState('Instant Drink');
    const [address, setAddress] = useState('Silvia Shop,GEC,Chittagong');


    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/user/singleOrderCollection?email=' + loggedInUser?.email,
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
                setService(data)
            })
    }, [loggedInUser.email])

    const handleRadio = e => {
        setRadio(e.target.value);
    }

    const handleServiceRadio = e => {
        setServiceType(e.target.value);
    }
    const handleAddress = e => {
        setAddress(e.target.value);
    }


    const { _id, name, imageURL, description } = service;
    const handlePaymentSuccess = paymentId => {
        const bookDetails = {
            user: loggedInUser.displayName,
            email: loggedInUser.email,
            order: service,
            PaymentMethod: radio,
            paymentId,
            type: serviceType,
            orderTime: new Date().toDateString(),
            status: 'Pending',
            destination: address
        };

        fetch('https://sleepy-plains-42535.herokuapp.com/user/ShipmentAndPayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    closeModal();
                    deleteSingleOrder();
                    alert('your order are  placed for shipment.');
                    history.push('/user/ShipmentDetail')
                }
            })
    }

    let total = 0;
    {
        service.map(order => {
            total = total + parseInt(order.price);
            // console.log(total)
        })
    }
    const deleteSingleOrder = () => {
        fetch(' https://sleepy-plains-42535.herokuapp.com/deleteSingleOrder?email=' + loggedInUser?.email, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (res) {

                }
            })
    }

    return (
        <div className="container w-100 text-white">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="row ">
                    <div className="d-flex justify-content-center align-items-center">
                         <button className="btn btn-primary btnClose" onClick={closeModal}>
                        <FontAwesomeIcon className="crossIcon text-center" className="" icon={faTimes} />
                    </button>
                    </div>
                    <h5 className="text-center w-100 text-white fonth5Shipment">Dear {loggedInUser.displayName}</h5>
                    <h6 className="text-center w-100 text-white fonth6Shipment">You purchased {service.length} type of drink.</h6>
                    <h6 className="text-center text-white fonth5Shipment">Please Confirm Your Payment:</h6>


                  
                        <div className="typeSelectContainer  mt-4" style={{ height: '2rem' }}>
                            <p className=" fw-bold pShip text-white "><span className="me-1 fontTypeShipment">Please Select Service Type:</span>
                                <select name="service" className="serviceTypeShipment" style={{ borderColor: '#2d524a' }} onChange={handleServiceRadio}>
                                    <option className="" style={{ color: 'black' }}>Instant Drink</option>
                                    <option className="" style={{ color: 'black' }} >Home Delivery</option>
                                </select>
                            </p><br />
                        </div>

                   
                    {serviceType == "Instant Drink" &&
                        <>
                            <h6 className="text-white fontShipment">Service Charge: $3</h6>
                            <h6 className="text-white  fontShipment mb-0">Your Total: {total + 3}</h6>
                        </>}
                    {serviceType == "Home Delivery" &&
                        <>
                            <h6 className="text-white  fontShipment">Home Delivery: $10</h6>
                            <h6 className="text-white  fontShipment" >Your Total: {total + 10}</h6>
                            <div className="d-flex">
                                <h6 className="mt-1 me-3 text-white  fontShipment">Address:</h6>
                                <input type="text" onBlur={handleAddress} id="address" className="form-control w-75" name="address" placeholder="Address" />
                            </div>
                        </>}
                    <div className="col-md-12  col-sm-12  bookSection ">
                        <div className="d-flex justify-content-start align-items-center ">
                            <p className="me-2 fw-bold text-white fontShipment mt-1 mb-0">Pay With: </p>
                            <input type="radio" onChange={handleRadio} className="ms-1 text-white" id="male" name="gender" defaultChecked={true} value="Credit Card" />
                            <label for="Credit Card" className="text-white"><FontAwesomeIcon className="iconSize  text-white " icon={faCcMastercard} style={{ color: '#DF3512' }} /><span className="fontShipment">
                                Credit Card</span></label>

                            <input type="radio" onChange={handleRadio} className="" id="Paypal" name="gender" value="Paypal" />
                            <label for="Paypal" className="text-white"><FontAwesomeIcon className="iconSize  fontShipment" 
                            icon={faCcPaypal} style={{ color: '#253b80' }} />
                            <span className="fontShipment">Paypal</span></label>
                        </div>


                        <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default ShipmentAndPayment;

