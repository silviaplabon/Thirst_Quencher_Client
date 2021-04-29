import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import DrinkShowById from '../DrinkShowById/DrinkShowById';
import DrinkShowByName from '../DrinkShowByName/DrinkShowByName';
import Footer from '../Footer/Footer';
import './HomeIngredientDetails.css'

const HomeIngredientDetails = () => {
    const { id } = useParams();
    const { name } = useParams();
    const [detail, setDetail] = useState({})
    const [drinks, setDrinks] = useState([])
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        let url;
        let url1 = ` https://sleepy-plains-42535.herokuapp.com/ingredientByName/${name}`;
        let url2 = ` https://sleepy-plains-42535.herokuapp.com/ingredientById/${id}`;
        {
            name ? url = url1 : url = url2
        }
        fetch(url)
            .then(res => res.json())
            .then(data => { setDetail(data); setSpinner(false) })
    }, [])
    const { strIngredient, strDescription, strType, strAlcohol,_id } = detail;

    useEffect(() => {
        let ingredienturl = ` https://sleepy-plains-42535.herokuapp.com/ingredientDrinksByName/${strIngredient}`;
        fetch(ingredienturl)
            .then(res => res.json())
            .then(data => { setDrinks(data); setSpinner(false) })
    }, [strIngredient])



    return (
        <>
        <div className="container">
            { spinner ?
                <div className="text-center  mb-5 pt-5 pb-5">
                    <div className="spinner-grow spinnerColor" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow spinnerColor" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow spinnerColor" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div className="row mt-5 ">
                    <div className="col-md-12 d-flex justify-content-center row mx-1">
                        <div className="card mb-3 shadow-lg">
                            <div className="row g-0">
                                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                    <img src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}-Medium.png`} className=" mt-5 align-items-center w-50 h-50 imgSizeIngredient " />
                                </div>
                                <div className="col-lg-8 col8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-center">{strIngredient}</h5>
                                        <p className="card-text text-justify pIngredient">{strDescription}</p>
                                        <p className="card-text fw-bold text-center">{strType}
                                            {
                                                strAlcohol == "yes" ? <small className="text-muted">: Alcoholic</small> : <small className="text-muted">: Not_Alcoholic</small>
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row row-cols-1  row-cols-sm-2  row-cols-md-3 row-cols-lg-5  mt-5">
                            {
                                drinks.map(drink => <DrinkShowById drink={drink} state={true}></DrinkShowById>)
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
        <Footer></Footer>
        </>
    );
};

export default HomeIngredientDetails;