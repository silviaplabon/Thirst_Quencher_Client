import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './HomeDrink.css';

const HomeDetailDrink = () => {
    const { name } = useParams();
    const { id } = useParams();
    const history = useHistory();
    const [detail, setDetail] = useState({})

    useEffect(() => {
        let url;
        let url1 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
        let url2 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        {
            name ? url = url1 : url = url2
        }
        fetch(url)
            .then(res => res.json())
            .then(data => { setDetail(data.drinks[0])})
    }, [])

    const { strDrink, strInstructions, strDrinkThumb } = detail;

    useEffect(() => {
        const ingredientContainer = document.getElementById('ingredientContainer');
        ingredientContainer.innerHTML = " ";
        for (var i = 0; i < 10; i++) {
            const value = `${detail[`${`strMeasure${i}`}`]} ${detail[`${`strIngredient${i}`}`]}`;
            const valueimg = `${detail[`${`strIngredient${i}`}`]}`;
            if (value !== "null null" && value.length > 3 && value !== "undefined undefined") {
                const ingredient = document.createElement('div');
                ingredient.className = "col mt-5";
                ingredient.innerHTML = `
                <div className="card h-100" >
                    <img src="https://www.thecocktaildb.com/images/ingredients/${valueimg}-Medium.png" class="card-img-top" alt="..."/>
                <div class="card-body cardHomeDrink" >
                    <p class="card-text text-center" >${value}</p>
                </div>
                </div>`
                ingredientContainer.appendChild(ingredient);
            }
        }
    }, [])

    return (
        <div className=" detaildrinkstyle container">
            <div className=" row m-auto mx-5 px-5 detaildrinkstyle">
                <div className=" mt-5 col-md-5 cardHomeDrink card h-100">
                    <img src={strDrinkThumb} class="card-img-top h-100 " alt="..."></img>
                </div>
                <div className="col-md-7 row row-col-xs-1 row-cols-md-3 row-cols-sm-2 " id="ingredientContainer">
                </div>
            </div>
            <div className="w-75 m-auto text-center">
                <div className="">
                    <h6 className="card-title mt-5 mb-2">Instructions</h6>
                    <p className="card-text">{detail.strInstructions}</p>
                </div>
                <div className="">
                    <h6 className="card-title mt-4 mb-2">Glass</h6>
                    <p className="card-text">Serve-{detail.strGlass}</p>
                </div>
                <div className="">
                    <p className="card-text mt-4">Recipe</p>
                    <a href={detail.strVideo} target="_blank"><FontAwesomeIcon className="iconSize" icon={faYoutube} style={{ fontSize: '60px', color: '#E62117' }} /></a>
                </div>
            </div>
        </div>
    );
};

export default HomeDetailDrink;