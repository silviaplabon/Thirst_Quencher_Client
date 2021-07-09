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

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        paddingTop: '0px',
        marginTop:'0px',
        width:'60%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'#27211D'
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
                    <h5 className="text-center w-100 text-white">Dear {loggedInUser.displayName}</h5>
                    <h6 className="text-center w-100 text-white">You purchased {service.length} type of drink.</h6>
                    <h6 className="text-center text-white">Please Confirm Your Payment:</h6>


                    <div className=" mb-2 mt-5 w-100 row ">
                        <div className="col-md-8 col-lg-7 col-xs-12" style={{height:'3rem'}}>
                            <p className="ms-2 fw-bold pShip text-white">Please Select Service Type:</p><br />
                        </div>
                        <div className="col-md-4 col-lg-2 col-xs-12">
                            <select name="service" className="text-white" style={{ borderColor: '#2d524a' ,width:'7rem'}} onChange={handleServiceRadio}>
                                <option className="" style={{color:'black'}}>Instant Drink</option>
                                <option className=""  >Home Delivery</option>
                            </select>
                        </div>
                    </div>
                    {serviceType == "Instant Drink" &&
                        <>
                            <h6 className="text-white ms-2">Service Charge: $3</h6>
                            <h6 className="text-white ms-2">Your Total: {total + 3}</h6>
                        </>}
                    {serviceType == "Home Delivery" &&
                        <>
                            <h6 className="text-white">Home Delivery: $10</h6>
                            <h6 className="text-white" >Your Total: {total + 10}</h6>
                            <div className="d-flex">
                                <h6 className="mt-1 me-3 text-white">Address:</h6>
                                <input type="text" onBlur={handleAddress} id="address" className="form-control w-75" name="address" placeholder="Address" />

                            </div>
                        </>}
                    <div className="col-md-7  col-sm-12 ms-2 bookSection ">
                        <div className="col-md-8 col-sm-12">
                            <p className="me-2 fw-bold text-white">Pay With: </p>
                            <input type="radio" onChange={handleRadio} className="ms-1 text-white" id="male" name="gender" defaultChecked={true} value="Credit Card" />
                            <label for="Credit Card" className="text-white"><FontAwesomeIcon className="iconSize  text-white ms-1" icon={faCcMastercard} style={{ color: '#DF3512' }} />Credit Card</label>

                            <input type="radio" onChange={handleRadio} className="ms-1" id="Paypal" name="gender" value="Paypal" />
                            <label for="Paypal" className="text-white"><FontAwesomeIcon className="iconSize ms-1" icon={faCcPaypal} style={{ color: '#253b80' }} />Paypal</label>

                            <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default ShipmentAndPayment;

