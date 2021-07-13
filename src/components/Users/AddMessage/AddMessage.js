import React, { useContext, useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import UserSidebar from '../../Shared/UserSidebar/UserSidebar';
import './AddMessage.css'



const AddMessage = (props) => {
    const state=props.state;

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
        <>{
            state==true ?
            <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className=" mb-5  " >
            <div className="row d-flex" >
                <div className="col-md-12 mb-3">
                    <h5 className="text-center mt-5">Contact US</h5>
                    <input name="email" id="servicename" className="form-control " style={{ backgroundColor: '#f89808',color:'white' }} placeholder="Your email" defaultValue="" ref={register} />
                    <textarea name="description" className="form-control text-white mt-1" style={{ backgroundColor: '#f89808' }} placeholder="description" defaultValue="" ref={register} />
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    <div className="d-flex justify-content-end align-items-end">
                        <input type="submit" className="mt-2 btn sendBtn" value="Send" />
                    </div>
                </div>
            </div>
        </form></div>:
            <div className="row mt-0 ">
            <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xxl-2 p-0" >
                   <UserSidebar></UserSidebar>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 col-xxl-10" >
                <form onSubmit={handleSubmit(onSubmit)} className=" mb-5  addMessageContainer  w-75 mt-5 px-3" style={{backgroundColor:'D2AA5C',borderRadius:'0.70rem'}} >
                    <div className="row d-flex" >
                        <div className="col-md-12 mb-3">
                            <h5 className="text-center mt-4">Contact US</h5>
                            <input name="email" id="servicename" className="form-control " style={{color:'black' }} placeholder="Your email" defaultValue="" ref={register} />
                            <textarea name="description" className=" mt-1 form-control " style={{ color:'black'}} placeholder="description" defaultValue="" ref={register} />
                            {/* {errors.exampleRequired && <span>This field is required</span>} */}
                            <div className="d-flex justify-content-end align-items-end">
                                <input type="submit" className="mt-2 btn sendBtn" value="Send" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        }
        
        </>
    );
};

export default AddMessage;