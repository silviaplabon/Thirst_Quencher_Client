import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import IngredientListShow from '../IngredientListShow/IngredientListShow';

const Ingredient = () => {
    const [ingredients,setIngredients] = useState([]);
    useEffect(() => {
        let url = ` https://sleepy-plains-42535.herokuapp.com/ingredientsListCollection`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {setIngredients(data);})
    }, [])
    console.log(ingredients)
   
    return (
        <div className="container">
        <h5 className="text-center mt-4">Ingredient List</h5>
        <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4   justify-content-center align-items-center ">
            {
             ingredients.map(ingredient => <IngredientListShow ingredient={ingredient}></IngredientListShow> )
            }
        </div>
        </div>
    );
};

export default Ingredient;