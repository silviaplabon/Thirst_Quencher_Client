import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import DrinkShowById from '../../DrinkShowById/DrinkShowById';
import GlassCategorySearch from '../GlassCategorySearch/GlassCategorySearch';

const IngredientData = () => {
    const { name } = useParams();
    const [drinks, setDrinks] = useState([])
    useEffect(() => {
        let url = ` https://sleepy-plains-42535.herokuapp.com/IngredientDrinksByName/${name}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                    setDrinks(data)   
                    console.log(data,"data") 
            })
    }, [name])
    // 
    return (
                    <div className="container">
                        <h5 className="text-center mt-4">Browse Glass</h5>
                        <h5 className="text-center mt-4">{drinks.length}</h5>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                            {
                                drinks?.map(drink => <DrinkShowById drink={drink}  state={false}></DrinkShowById>)
                            }
                        </div>
                    </div> 
    );
};

export default IngredientData;