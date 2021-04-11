import { ContactSupportOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './EditProducts.css'
const axios = require('axios').default;

const EditProducts = () => {
    // const { drinkname, id } = useParams();

    // const { register, handleSubmit, watch, errors } = useForm();

    // const [imageURL, setImageURL] = useState(null);

    // const [selected, setSelected] = useState();
    // const [data, setData] = useState([])

    // function loadProduct(drinkname, id) {
    //     console.log(drinkname, id, "silvia")
    //     fetch(`https://sleepy-plains-42535.herokuapp.com/product/${drinkname}/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         })
    // }
    // loadProduct(drinkname, id);



    // const onSubmit = data => {
    //     const productData = {
    //         name: data.name,
    //         imageURL: imageURL,
    //     };
    //     fetch(`https://sleepy-plains-42535.herokuapp.com/update/${drinkname}/${id}`, {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(productData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 alert('updated')

    //             }
    //         })
    // }
    // const handleImageUpload = event => {
    //     console.log(event.target.files[0])
    //     const imageData = new FormData();
    //     imageData.set('key', 'b9c8c292069e10110cf7af6edcbd15eb');
    //     imageData.append('image', event.target.files[0]);

    //     axios.post('https://api.imgbb.com/1/upload', imageData)
    //         .then(function (response) {
    //             setImageURL(response.data.data.display_url);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    return (
        <div className="container mt-5">
            {/* <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5 formStyle">
                <div className="row">
                    {data? <h1>{data.name}</h1>:'no data'}
                </div>
                <div className="row d-flex">
                    <div className="col-md-5 row">
                        <div className=" col-md-12 mt-2">
                            <label for="productName">Product Name</label>
                            <input name="name" id="productName" className="form-control " defaultValue="" ref={register} />
                        </div>
                        <div className="col-md-12 mt-2 ms-0">
                            <label for="productImg" className="">Add Photo</label>
                            <input name="image" type="file" id="productImg" className="form-control " onChange={handleImageUpload} ref={register({ required: true })} />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                     {errors.exampleRequired && <span>This field is required</span>} 
                    <input type="submit" className="mt-3 btn btn-success" value="Save" />
                </div>
            </form> */}
        </div>



    );
};

export default EditProducts;