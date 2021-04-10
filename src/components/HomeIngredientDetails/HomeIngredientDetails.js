import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import DrinkShowById from '../DrinkShowById/DrinkShowById';
import DrinkShowByName from '../DrinkShowByName/DrinkShowByName';
import './HomeIngredientDetails.css'

const HomeIngredientDetails = () => {
    const { id } = useParams();
    const { name } = useParams();
    const [detail, setDetail] = useState({})
    const [drinks, setDrinks] = useState([])
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        let url;
        let url1 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`;
        let url2 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`;
        {
            name ? url = url1 : url = url2
        }
        fetch(url)
            .then(res => res.json())
            .then(data => { setDetail(data.ingredients[0]); setSpinner(false) })
    }, [])

    useEffect(() => {
        let ingredienturl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`;
        fetch(ingredienturl)
            .then(res => res.json())
            .then(data => { setDrinks(data.drinks); setSpinner(false) })
    }, [])


    const { strIngredient, strDescription, strType, strAlcohol } = detail;
    console.log(detail)

    return (
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
                                    <img src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}.png`} className=" mt-5 align-items-end imgSizeIngredient " />
                                </div>
                                <div className="col-lg-8 col8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-center">{strIngredient}</h5>
                                        <p className="card-text text-justify pIngredient">{strDescription}</p>
                                        <p className="card-text fw-bold text-center">{strType}
                                            {
                                                strAlcohol == "yes" ? <small class="text-muted">: Alcoholic</small> : <small class="text-muted">: Not_Alcoholic</small>
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*                 
                <div className="col-md-12 d-flex justify-content-center row mx-1">
                    <div className="col-md-12">
                    </div>
                    <div className="col-md-12 text-center mt-5">
                        <h5 className="card-title mt-5 mb-2 fw-bold mt-5">Descriptions</h5>
                        <p className="card-text text-justify mt-5">{strDescription}</p>
                        <h6 className="card-title mt-4 mb-1 fw-bold mt-5"></h6>

                    </div>
                </div> */}
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
    );
};

export default HomeIngredientDetails;