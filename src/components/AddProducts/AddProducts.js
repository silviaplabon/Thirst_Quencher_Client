 import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios').default;


const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [selected, setSelected] = useState(); 
    // const handleClick = () => {
    //     let x = document.getElementById('select').selectedIndex;
    //     alert(document.getElementsByTagName("option")[x].value);
    //     setSelected(document.getElementsByTagName("option")[x].value);
    // }
    const onSubmit = data => {
        const productData = {
            name: data.name,
            imageURL: imageURL, 
        };
        const queryData=data.category;
        {
            queryData ?
                fetch(`https://sleepy-plains-42535.herokuapp.com/${queryData}`, {
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
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b9c8c292069e10110cf7af6edcbd15eb');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 formStyle">
                <div className="row d-flex">
                    <div className="col-md-12">
                        {/* <select id="select" onBlur={handleClick}>
                            <option>PopularDrink</option>
                            <option>PopularIngredient</option>
                            <option>LatestDrink</option>
                            <option>RandomIngredient</option>
                            <option>RandomDrink</option>
                        </select> */}
                        <label className="">Please Select a Catagory: </label>
                        <select ref={register} name="category">
                            <option value="PopularDrink">PopularDrink</option>
                            <option value="PopularIngredient">PopularIngredient</option>
                            <option value="LatestDrink">LatestDrink</option>
                            <option value="RandomIngredient">RandomIngredient</option>
                            <option value="RandomDrink">RandomDrink</option>
                        </select>
                    </div>
                    <div className="col-md-5">
                        <label for="productName">Product Name</label>
                        <input name="name" id="productName" className="form-control " defaultValue="" ref={register} />
                    </div>
                    <div className="col-md-5 ms-2">
                        <label for="productImg" className="mt-2">Add Photo</label>
                        <input name="image" type="file" id="productImg" className="form-control " onChange={handleImageUpload} ref={register({ required: true })} />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    <input type="submit" className="mt-3 btn btn-success" value="Save" />
                </div>
            </form>
        </div>
    );
};
export default AddProducts;