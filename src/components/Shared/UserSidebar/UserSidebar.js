import React, { useContext } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './UserSidebar.css'



const UserSidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  return (
    <>
      <div className="w-100" style={{ backgroundColor: '#212529' }}>

        <nav className="navbar navbar-expand-md navbar-light   navbarDesign navbarUserSIdebar">
          <div className="container-fluid p-0  d-flex justify-content-end align-items-end">
            <button className="navbar-toggler text-white" style={{ backgroundColor: '#eaf2f5' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon " ></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav text-white">
                <ProSidebar className="proSidebar w-100" width="0" toggled={true} style={{  }}>

                  <Menu iconShape="square" className="w-100 d-flex-column align-items-center justify-content-center" popperArrow="true">
                    <MenuItem className="userSidebarLink "> <Link to="/" className="nav-link text-white text-center" >Home</Link> </MenuItem>
                    <MenuItem className="userSidebarLink"> <Link to="/user/AddMessage" className=" text-center nav-link text-white" >Add Message</Link> </MenuItem>
                    <MenuItem className="userSidebarLink "> <Link to="/user/AddTestimonials" className="text-center nav-link text-white" >Add Review</Link> </MenuItem>
                    <MenuItem className="userSidebarLink "> <Link to="/user/ShipmentDetail" className="text-center nav-link text-white" >Shipment</Link> </MenuItem>
                    <MenuItem className="userSidebarLink d-flex justify-content-center align-items-center" > <button onClick={() => setLoggedInUser({})} className="btn  buttonColor text-center  buttonStyleHeader  nav-link fw-bold " style={{ color: 'white' }}>Logout</button></MenuItem>
                  </Menu>
                </ProSidebar>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>





  );
};

export default UserSidebar;