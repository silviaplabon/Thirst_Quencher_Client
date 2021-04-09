
import React, { createContext, useContext, useState } from 'react';
import './Header.css';
import Drinks from '../Drinks/Drinks';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import HomeDetailDrink from '../HomeDrinkDetails/HomeDrinkDetails';

const Header = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleChange = event => {
        const name = event.target.value;
        history.push(`/${name}`)
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light fw-bold navbarColor  navbarDesign container pt-5">
            <div className="container-fluid">
                <h1 className="navbar-brand h2HeaderColor fw-bold" href="#">SILVIA</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <input className="form-control me-3 mt-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/orders" className=" nav-link">Orders</Link>
                        <Link to="/admin" className="nav-link">Admin</Link>
                        <Link to="/" className="nav-link">Deals</Link>
                        {loggedInUser.email && (loggedInUser.displayName ? <button className="btn buttonColor me-2  buttonStyleHeader">{loggedInUser.displayName}</button>
                            : <button className="btn  me-2  buttonStyle buttonColor">{loggedInUser.email}</button>)}

                        {loggedInUser.email ? <button onClick={() => setLoggedInUser({})} className="btn buttonColor logStyle  buttonStyleHeader ms-1">Logout</button> :
                            <Link to="/login" className="btn  ms-1 buttonStyleHeader buttonColor">Login</Link>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;