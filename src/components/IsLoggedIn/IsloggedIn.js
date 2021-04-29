import React, { useContext, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { UserContext } from '../../App';

const IsloggedIn = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const token=localStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const { name, email, picture } = decodedToken;
    console.log(decodedToken)
    const currentTime = new Date().getTime() / 1500;

    const signedInUser = {
      displayName: name,
      email: email,
      photo: picture,
      isSignedIn: true,
      error: ''
    }
    {
        ((!loggedInUser.email &&token) && decodedToken.exp > currentTime)&& setLoggedInUser(signedInUser);
    }
    return (
        <>
        </>
    );
};

export default IsloggedIn;