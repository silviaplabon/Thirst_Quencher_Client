
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
        <div className="headerStyle">
        <nav className="navbar navbar-expand-md navbar-light fw-bold navbarColor  navbarDesign container pt-5">
            <div className="container-fluid">
                <h1 className="navbar-brand h2HeaderColor fw-bold " href="#">SILVIA</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <input className="form-control me-3 mt-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/auth/filter" className=" nav-link">Filter</Link>
                        <Link to="/auth/setup/admin" className="nav-link">Admin</Link>

                        {loggedInUser.email ? <button onClick={() => setLoggedInUser({})} className="btn buttonColor logStyle  buttonStyleHeader  fw-bold " style={{color:'white'}}>Logout</button> :
                            <Link to="/auth/login" className="btn  ms-1 buttonStyleHeader buttonColor fw-bold">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;