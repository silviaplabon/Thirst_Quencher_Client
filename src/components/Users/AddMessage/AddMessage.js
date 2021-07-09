import React, { useContext, useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import './AddMessage.css'



const AddMessage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const onSubmit = data => {
        const testimonialData = {
            email: data.email,
            description: data.description,
        };
        const url = `https://sleepy-plains-42535.herokuapp.com/addMessage`;
        {
            loggedInUser.email && fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
            .then(res => console.log('server side response', res))
        }
        {
            !loggedInUser.email&&alert('please login to add a message')
        }

       
    }
    return (
        <div className="row mt-0">
            <div className="col-md-12 col-sm-12 col-xs-12 ms-1" >
                <form onSubmit={handleSubmit(onSubmit)} className=" w-75 mb-5 " >
                    <div className="row d-flex" >
                        <div className="col-md-12 mb-3">
                            <h5>Contact US</h5>
                            <input name="email" id="servicename" className="form-control " style={{ backgroundColor: '#27211D',color:'white' }} placeholder="Your email" defaultValue="" ref={register} />
                            <textarea name="description" className="form-control text-white" style={{ backgroundColor: '#27211D' }} placeholder="description" defaultValue="" ref={register} />
                            {/* {errors.exampleRequired && <span>This field is required</span>} */}
                            <div className="d-flex justify-content-end align-items-end">
                                <input type="submit" className="mt-2 btn sendBtn" value="Send" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMessage;