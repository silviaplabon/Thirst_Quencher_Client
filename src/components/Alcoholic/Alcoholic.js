import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DrinkShowById from '../DrinkShowById/DrinkShowById';

const Alcoholic = () => {
    const [drinks,setDrinks] = useState([]);
    useEffect(() => {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {setDrinks(data.drinks);})
    }, [])
    return (
        <div className="container">
            <h5 className="text-center mt-4">Browse Cocktails</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
            {
             drinks?.map(drink => <DrinkShowById drink={drink} ></DrinkShowById>)
            }
        </div>
        </div>
    );
};

export default Alcoholic;