import React, { useContext, useEffect } from 'react';
import { CartContext, UserContext } from '../../App';

const OrderLength = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);
    const token=localStorage.getItem('token')

    useEffect(() => {
        {
            loggedInUser.email &&
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
                    setCart(data)
                }
               
            })
        }   

    }, [token||cart?.length])
    return (
        <div>
            
        </div>
    );
};

export default OrderLength;