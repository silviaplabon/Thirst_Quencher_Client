import { ContactSupportOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './EditProducts.css'
const axios = require('axios').default;

const EditProducts = () => {
    const { drinkname, id } = useParams();

    const { register, handleSubmit, watch, errors, onSilvia } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const [selected, setSelected] = useState();

    const [data, setData] = useState({});
    const [update, setUpdate] = useState(false);

    function loadProduct(drinkname, id) {
        fetch(`https://sleepy-plains-42535.herokuapp.com/product/${drinkname}/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }

    const onSubmit = data => {
        console.log(data, "onSUbmit value");
        const productData = {
            name: data.name,
            imageURL: imageURL,
        };
        fetch(`https://sleepy-plains-42535.herokuapp.com/update/${drinkname}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('updated this product')
                }
            })


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
    useEffect(() => {
        loadProduct(drinkname, id)
        document.getElementById('invisibleClass1').style.display = 'none';
        document.getElementById('invisibleClass2').style.display = 'none';
        // https://sleepy-plains-42535.herokuapp.com/update/PopularDrinks/6072d853cec39e00150e8077

    }, [drinkname])

    return (
        <div className="containerColor mt-0">
            <div className="container pt-5 pb-5">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5 formStyle">

                    <div className="row w-100   g-4 m-auto">
                        <div className="col-md-5">
                            <div className="card h-100">
                                <img src={data.imageURL} className="card-img-top h-75 w-100" alt="" />
                                <div className="card-body h-25" style={{ color: 'black' }}>
                                    <h6 className="card-title text-center">{data.name}</h6>
                                    <p className="text-center" style={{ fontSize: '10px' }}>{data.imageURL}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 ">
                            <div className=" col-md-12 mt-2">
                                <label for="productName">Product Name</label>
                                <input name="name" id="productName" className="form-control " defaultValue="" ref={register} />
                            </div>
                            <div className="col-md-12 mt-2 ms-0">
                                <label for="productImg" className="">Add Photo</label>
                                <input name="image" type="file" id="productImg" className="form-control " onChange={handleImageUpload} ref={register({ required: true })} />
                            </div>

                            <div className=" col-md-12 mt-2" id="invisibleClass1">
                                <label for="drinkname"></label>
                                <input name="drinkname" id="drinkname" type="text" className="form-control" defaultValue={drinkname} ref={register} />
                            </div>
                            <div className="col-md-12 mt-2 ms-0 " id="invisibleClass2">
                                <label for="id" className=""></label>
                                <input name="id" type="text" id="id" className="form-control" defaultValue={id} ref={register({ required: true })} />
                            </div>
                            <div className=" col-md-12 d-flex justify-content-end">
                                {errors.exampleRequired && <span>This field is required</span>}
                                <input type="submit" className="mt-3 btn " style={{backgroundColor:'#ffc107'}} value="Save" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default EditProducts;