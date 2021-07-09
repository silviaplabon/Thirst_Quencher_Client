import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './HomeDrinkDetails.css';
import DrinkShowById from '../../Home/DrinkShowById/DrinkShowById'
import { UserContext, ValueContext } from '../../../App';
import { CartContext } from '../../../App';
import { LaptopWindowsSharp, NightsStay, SettingsInputAntennaTwoTone } from '@material-ui/icons';
import OrderIsExist from '../../Shared/OrderIsExist/OrderIsExist'
import Footer from '../../Shared/Footer/Footer';
import OrderDetailShow from '../../Users/OrderDetailShow/OrderDetailShow';


const HomeDetailDrink = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext)
    const [value,setValue]=useContext(ValueContext);
    const { name } = useParams();
    const { id } = useParams();
    const history = useHistory();
    const [detail, setDetail] = useState({})
    const [drinks, setDrinks] = useState([])
    const [orderData, setOrderData] = useState([])
    const [state, setState] = useState(null);
    const [orderUpdate, setOrderUpdate] = useState(false);
//checking drink detail
React.useEffect(() => {       window.scrollTo(0, 0);     }, [name||id]);


    useEffect(() => {
        let url;
        let url1 = ` https://sleepy-plains-42535.herokuapp.com/drinkDetailByName/${name}`;
        let url2 = ` https://sleepy-plains-42535.herokuapp.com//drinkDetailById/${id}`;
        {
            name ? url = url1 : url = url2
        }
        // console.log(url,"url")
        fetch(url)
            .then(res => res.json())
            .then(data => { setDetail(data); ;
                })
    }, [name || id])
   

//checking similar product
    useEffect(() => {
        let url = ` https://sleepy-plains-42535.herokuapp.com/similarDrink/${detail?.strGlass}/${detail?.strCategory}/${detail?.strAlcoholic}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDrinks(data);
            })
    }, [detail?.strGlass])


    useEffect(() => {
        const ingredientContainer = document.getElementById('ingredientContainer');
        ingredientContainer.innerHTML = " ";
        for (var i = 0; i < 10; i++) {
            const value = `${detail[`${`strMeasure${i}`}`]} ${detail[`${`strIngredient${i}`}`]}`;
            const valueimg = `${detail[`${`strIngredient${i}`}`]}`;
            if (value !== "null null" && value.length > 3 && value !== "undefined undefined") {
                const ingredient = document.createElement('div');
                ingredient.className = "col ";
                ingredient.addEventListener('click', function () {
                    history.push(`/ingredientsByName/${valueimg}`);
                   
                   
                })
                ingredient.innerHTML = `
                <div className="card h-75" >
                    <img src="https://www.thecocktaildb.com/images/ingredients/${valueimg}-Small.png" className="img-fluid " alt="..."/>
                <div className="card-body cardHomeDrink" >
                    <p className=" " >${value}</p>
                </div>
                </div>`
                ingredientContainer.appendChild(ingredient);
            }
        }
    }, [detail])

//checking if this order exist in database or not?if exist  set state as true otherwise set as false
    useEffect(() => {
           let url = `https://sleepy-plains-42535.herokuapp.com/SingleOrderDataShow/${detail.idDrink}/${loggedInUser.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data==false){
setValue(false);
                }
                else{
                   
                    setOrderData(data);
                    console.log(orderData)
                    setState(true);
                    setValue(true);
                }
            })
    },[detail.idDrink])
    
    const handleAddOrderByOrderData = orderData => {
        console.log(orderData);
        const detailsUpdate = {
            price: (parseInt(detail.price) + parseInt(orderData?.price)),
            quantity: (1 + parseInt(orderData?.quantity)),
        }
        fetch(`https://sleepy-plains-42535.herokuapp.com/updateNewPriceAndQuantity/${orderData?._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(detailsUpdate)
        })
            .then(res => res.json())
            .then(data => {
                setValue(true); 

               
                // setOrderUpdate(true); 
                alert('Order Inserted Successfully');
            })
    }



    const handleAddOrder = (detail, email) => {
        const detailsNew = {
            idDrink: detail.idDrink,
            strDrink: detail.strDrink,
            price: detail.price,
            strDrinkThumb: detail.strDrinkThumb,
            quantity: 1,
            email: email
        }
        // console.log(detailsNew)
        fetch(' https://sleepy-plains-42535.herokuapp.com/AddSingleOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detailsNew)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your Order placed successfully');
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
                            setCart(data);
                            setValue(true);
                    
                            // setOrderUpdate(true);
                        })
                }
                else{
                    setValue(false);
                }
            })
    }

    return (
        <> 
            <div className="containerColor" >
              
                <div className=" detaildrinkstyle container ">

                    <div className=" row  detaildrinkstyle d-flex">
                        <div className=" mt-5 col-md-5 col-sm-5 cardHomeDrink card h-100 mx-1">
                            <img src={detail?.strDrinkThumb} className="card-img-top h-100 " alt="..."></img>

                        </div>
                        <div className="col-md-7 col-sm-7 row row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 mt-5 " id="ingredientContainer">
                        </div>
                    </div>

                    <div className="w-75 m-auto text-center d-flex-column justify-content-center align-items-center">
                        <div className="">
                            <h6 className="card-title mt-5 mb-2 fw-bold">Instructions</h6>
                            <p className="card-text">{detail.strInstructions}</p>
                        </div>
                        <div className="">
                            <h6 className="card-title mt-4 mb-2 fw-bold">Glass</h6>
                            <p className="card-text">Serve-{detail.strGlass}</p>
                        </div>
                        <div className="">
                            <h6 className="card-title mt-4 mb-2 fw-bold">{detail.strAlcoholic}</h6>

                        </div>

                        {
                            detail.strVideo &&
                            <div className="">
                                <p className="card-text mt-4 fw-bold">Recipe</p>
                                <a href={detail.strVideo} target="_blank"><FontAwesomeIcon className="iconSize" icon={faYoutube} style={{ fontSize: '60px', color: '#E62117' }} /></a>
                            </div>
                        }
                        <div className="">
                            <h6 className="ms-1 text-center"> ${detail?.price}</h6>
                            <h1>{state}</h1>
                            {
                                ((value==false&&orderData)) && <button className="btn btn-primary btn-sm me-1 mt-1 btnCart" onClick={() => handleAddOrder(detail, loggedInUser.email)}>Adding To Cart</button>

                            }
                            {
                                (value == true) &&
                                <button className="btn btn-primary btn-sm me-1 mt-1 btnCart" onClick={() => handleAddOrderByOrderData(orderData)}>Add To Cart</button>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-12 container">
                    <h5 className="text-center mt-5 text-white p-3" style={{ backgroundColor: '#27211D' }}>Similar Drinks</h5>
                    <div className="row row-cols-1  row-cols-sm-2  row-cols-md-3 row-cols-lg-4  ">
                        {
                            drinks.map(drink => <DrinkShowById drink={drink} state={false}></DrinkShowById>)
                        }
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default HomeDetailDrink;