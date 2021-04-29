import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DrinkShowById from '../../DrinkShowById/DrinkShowById';

const Alcoholic = () => {
    const [drinks,setDrinks] = useState([]);
    useEffect(() => {
        let url = ` https://sleepy-plains-42535.herokuapp.com/filter/Alcoholic`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {setDrinks(data);})
    }, [])
    const drinksUpdate=drinks.slice(0,100);
    return (
        <div className="container">
            <h5 className="text-center mt-4">Browse Alcoholic</h5>
            <h5>{drinks?.length}</h5>
        <div className="row row-cols-2  row-cols-md-4 row-cols-lg-5 g-4 mt-3">
            {
             drinksUpdate?.map(drink => <DrinkShowById drink={drink} state={true} ></DrinkShowById>)
            }
        </div>
        </div>
    );
};

export default Alcoholic;