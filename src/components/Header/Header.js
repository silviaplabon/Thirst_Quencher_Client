
import React, { createContext, useContext, useEffect, useState } from 'react';
import './Header.css';
import Drinks from '../Drinks/Drinks'
import { Link, useHistory } from 'react-router-dom';
import { CartContext, UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import HomeDetailDrink from '../HomeDrinkDetails/HomeDrinkDetails';
import { TramRounded } from '@material-ui/icons';

const Header = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);
    const token=localStorage.getItem('token')
    const [state, setState] = useState(false);
    const [orderLength, setOrderLength] = useState(null)
    const handleChange = event => {
        const name = event.target.value;
        history.push(`/${name}`)
    }
    console.log(orderLength)
    const handleLogOut = () => {
        fetch(' https://sleepy-plains-42535.herokuapp.com/deleteUserCollection?email=' + loggedInUser?.email, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (res) { 
                   
                    
                }
            })
        setLoggedInUser({});
        localStorage.setItem('token', '')

    }
    useEffect(() => {
        fetch(' https://sleepy-plains-42535.herokuapp.com/SingleOrderUser/orderLength?email=' + loggedInUser?.email,
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
                    setOrderLength(data.length)
                    setState(true)
                }
                else {
                    setState(false)
                }
            })

    }, [loggedInUser||cart?.length])

console.log(cart.length)




    useEffect(() => {
        fetch(' https://sleepy-plains-42535.herokuapp.com/userIsAdmin?email=' + loggedInUser?.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    if (data.length > 0) {
                        const user = { ...loggedInUser };
                        user.admin = true;
                        user.role = data[0].role;
                        setLoggedInUser(user);
                    }

                }
                else {
                }
            })
    }, [loggedInUser.email])
    console.log(loggedInUser);
    return (
        <div className="headerStyle">
            <nav className="navbar navbar-expand-md navbar-light fw-bold navbarColor  navbarDesign container pt-5">
                <div className="container-fluid">
                    <h1 className="navbar-brand h2HeaderColor fw-bold " href="#">Sip & Savor</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <input className="form-control me-3 mt-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/auth/filter" className=" nav-link">Filter</Link>
                            <Link to="/auth/setup/admin" className="nav-link">Admin</Link>
                            <Link to="/auth/AllDrinkDetails" className="nav-link">Drinks</Link>
                            {
                                (token &&(state == true && orderLength !== 0)) && <Link to="/user/OrderListShow" className="d-flex justify-content-center align-items-center"><FontAwesomeIcon className="iconSize text-white " icon={faCartPlus} /><span className="ms-1 lengthStyle"> {orderLength}</span></Link>
                            }
                            {(loggedInUser.email) ? <button onClick={handleLogOut} className="btn buttonColor   buttonStyleHeader  fw-bold mb-1  " style={{ color: 'white' }}>Logout</button> :
                                <Link to="/auth/login" className="btn   buttonStyleHeader buttonColor fw-bold">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;