import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';


const AdminMaker = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const onSubmit = data => {
    const adminData = {
      email: data.email,
      role:data.role
    };
    const url = ` https://sleepy-plains-42535.herokuapp.com/adminMaker`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
      .then(res => alert('Admin Entered Successfully'))
  };


  return (
    <div className="container  mt-5 p-0">
      <div className="row">
        <div className="col-md-10 justify-content-center align-items-center">

          <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 formStyle border-rounded">
            <label for="servicename">Email</label>
            <input name="email" type="email" id="servicename" className="form-control mb-1 " defaultValue="" ref={register} />
            <label className="">Please Select a Role: </label>
                        <select ref={register} name="role" >
                            <option value="Administrator">Administrator</option>
                            <option value="Support Specialist">Support Specialist</option>
                            <option value="Developer">Developer</option>
                            <option value="Analyst">Analyst</option>
                            <option value="View Only">View Only</option>
                        </select>
                        <br/>
                        {
                          (loggedInUser.admin==true &&loggedInUser.role=="Administrator")&&<input type="submit" className="text-white mt-3 btn btnSave" value="Save" />
                        }
           
          </form>
        </div>
      </div>
    </div>

  );
};

export default AdminMaker;