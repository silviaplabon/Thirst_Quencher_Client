import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DrinkShowById from '../../DrinkShowById/DrinkShowById';

const NonAlcoholic = () => {
    const [drinks,setDrinks] = useState([]);
    useEffect(() => {
        let url = ` https://sleepy-plains-42535.herokuapp.com/filter/NonAlcoholic`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {setDrinks(data);})
    }, [])
    const drinksUpdate=drinks.slice(0,100);
   
    return (
        <div className="container">
            <h5 className="text-center mt-4">Browse Non Alcoholic</h5>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
            {
             drinksUpdate?.map(drink => <DrinkShowById drink={drink} state={true} ></DrinkShowById>)
            }
        </div>
        </div>
    );
};

export default NonAlcoholic;