
import React, { createContext, useContext, useEffect, useState } from 'react';
import './Header.css';
import Drinks from '../../Home/Drinks/Drinks'
import { Link as Link1, useHistory } from 'react-router-dom';
import { CartContext, UserContext, ValueContext } from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faSearch } from '@fortawesome/free-solid-svg-icons'
import HomeDetailDrink from '../../Home/HomeDrinkDetails/HomeDrinkDetails';
import { TramRounded } from '@material-ui/icons';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Header = (props) => {
    const searchOption=props.searchOption;

    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [value, setValue] = useContext(ValueContext)
    const [cart, setCart] = useContext(CartContext);
    const [orderLength, setOrderLength] = useState(null)
    const token = localStorage.getItem('token')
    const [state, setState] = useState(false);
    const [searchData,setSearchData]=useState(null);

    const handleChange = event => {
        const name = event.target.value;
        setSearchData(name);
    }
    const handleSearchOption=name=>{
        history.push(`/${name}`)
    }
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
        fetch(' https://sleepy-plains-42535.herokuapp.com/userIsAdmin?email=' + loggedInUser?.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // console.log(data)
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
    console.log(value, "silvia")
    return (
        <div className="headerStyle upperdupper1 "  >
            <nav className="navbar navbar-expand-md navbar-light fw-bold navbarColor  navbarDesign container pt-5">
                <div className="container-fluid">
                    <h1 className="navbar-brand h2HeaderColor fw-bold "  href="#">Thirst Quencher</h1>
                    <button className="navbar-toggler" type="button" style={{backgroundColor:'white'}} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav" >
                            <Link1 to="/" className="nav-link text-white" >Home</Link1>
                            <Link1 to="/user/AddMessage" className="nav-link text-white" >profile</Link1>
                            <Link activeClass="active" to="filterSectionLink" spy={true} smooth={true} offset={50} duration={500}
                             className="nav-link text-white">Filter</Link>
                            <Link1 to="/auth/setup/admin" className="text-white nav-link" >Admin</Link1>
                            {
                                (token && cart.length !== 0) &&
                                
                                <Link1 to="/user/OrderListShow" className="d-flex justify-content-center align-items-center" style={{ textDecoration: 'none' }}><FontAwesomeIcon className="iconSize text-white " icon={faCartPlus} />
                                    <span className="ms-1 lengthStyle" > {cart.length}</span></Link1>
                            }
                            {(loggedInUser.email) ? <button onClick={handleLogOut} className="btn  buttonColor   buttonStyleHeader  nav-link fw-bold " style={{ color: 'white' }}>Logout</button> :
                                <Link1 to="/auth/login" className="btn   buttonStyleHeader buttonColor fw-bold">Login</Link1>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;