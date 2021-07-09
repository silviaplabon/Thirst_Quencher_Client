import React, { useContext, useEffect, useState } from 'react';
import { UserContext, ValueContext } from '../../../App';

const OrderIsExist = ({ idDrink }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [value, setValue] = useContext(ValueContext);
    useEffect(() => {

        // let url = ` https://sleepy-plains-42535.herokuapp.com/SingleOrderDataShow/${detail.idDrink}/`;
        let url = ` https://sleepy-plains-42535.herokuapp.com/SingleOrderDataShow/${idDrink}/${loggedInUser?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data==false) {
                    setValue(false);
                }
                else {
                    setValue(true);
                   
                }
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default OrderIsExist;