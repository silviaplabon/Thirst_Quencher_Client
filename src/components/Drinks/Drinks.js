
import React, { useContext, useEffect, useState } from 'react';
import Drink from '../DrinkShowById/DrinkShowById';
import './Drinks.css'
import  { SearchContext } from '../Header/Header';
import DrinkShowById from '../DrinkShowById/DrinkShowById';
import { useParams } from 'react-router';


const Drinks = () => {
    const [drinks,setDrinks] = useState([]);
    const {name}=useParams();
    useEffect(() => {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {setDrinks(data.drinks); console.log(data);})
    }, [])
    console.log(drinks)
    return (
        <div className="container">
            <h5 className="text-center mt-4">Browse Search Result</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
            {
                drinks?.map(drink => <DrinkShowById drink={drink} ></DrinkShowById>)
            }
        </div>
        </div>
    )
};

export default Drinks;