 import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './AddProducts.css'
const axios = require('axios').default;


const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [imageURL, setImageURL] = useState(null);
    const [selected, setSelected] = useState(); 
    const onSubmit = data => {
        const productData = {
            name: data.name,
            imageURL: imageURL, 
        };
        const queryData=data.category;
        {
            queryData ?
                fetch(` https://sleepy-plains-42535.herokuapp.com/adddata/${queryData}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productData)
                })
                : alert('please select a value');
        }
    }
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'b9c8c292069e10110cf7af6edcbd15eb');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });
    }


    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 formStyle">
                <div className="row d-flex">
                    <div className="col-md-12">
                        <label className="">Please Select a Catagory: </label>
                        <select ref={register} name="category" >
                            <option value="PopularDrink">PopularDrink</option>
                            <option value="PopularIngredient">PopularIngredient</option>
                            <option value="LatestDrink">LatestDrink</option>
                            <option value="RandomIngredient">RandomIngredient</option>
                            <option value="RandomDrink">RandomDrink</option>
                        </select>
                    </div>
                    <div className="col-md-5 mt-2">
                        <label for="productName">Product Name</label>
                        <input name="name" id="productName" className="form-control " defaultValue="" ref={register} />
                    </div>
                    <div className="col-md-5  mt-2 ms-0">
                        <label for="productImg" className="">Add Photo</label>
                        <input name="image" type="file" id="productImg" className="form-control " onChange={handleImageUpload} ref={register({ required: true })} />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                   {
                 (loggedInUser.admin==true &&loggedInUser.role=="Administrator")&&<input type="submit" className="mt-3 btn btnSave text-white" value="Save" />
                   }

                       
                    
                </div>
            </form>
        </div>
    );
};
export default AddProducts;