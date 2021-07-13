import React, { useContext, useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import {Link } from "react-router-dom";
import { UserContext } from '../../../App';
import UserSidebar from '../../Shared/UserSidebar/UserSidebar';

const AddTestimonial= () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const testimonialData = {
            name: data.name,
            description: data.description,
            image:loggedInUser?.photo
        };
         alert(loggedInUser.picture)
        const url = `https://sleepy-plains-42535.herokuapp.com/addTestimonial`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
            .then(res => console.log('server side response', res))
    }
    return (
        <div className="">
    <div className="row ">
        <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xxl-2 p-0">
            <UserSidebar></UserSidebar>
        </div>
            <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 col-xxl-10  mt-1 ">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5 addMessageContainer px-4 py-2" style={{borderRadius:'0.70rem'}}>
                    <div className="row d-flex">
                        <div className="col-md-7 w-100 m-auto">
                            <h5 className="text-center mb-2">Add a Review</h5>
                            <input name="name" id="servicename" className="form-control " placeholder="Your Name" defaultValue="" ref={register} />
                            <textarea name="description" className="mt-1 form-control " placeholder="description" defaultValue="" ref={register} />
                            {/* {errors.exampleRequired && <span>This field is required</span>} */}
                            <input type="submit" className="mt-3 btn btn-primary sendBtn" value="Save" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddTestimonial;