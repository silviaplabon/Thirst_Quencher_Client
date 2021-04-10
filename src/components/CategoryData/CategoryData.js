import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Category from '../Category/Category';
import DrinkShowById from '../DrinkShowById/DrinkShowById';

const CategoryData = () => {
    const [drinks, setDrinks] = useState([]);
    const { name } = useParams();
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => { setDrinks(data.drinks); console.log(data); setSpinner(false) })
    }, [name])
    return (
        <div className="container">
                    <h5 className="text-center mt-4">Browse Category</h5>
                   
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                        {
                            drinks?.map(drink => <DrinkShowById drink={drink} ></DrinkShowById>)
                        }
                    </div>
                    {(!spinner &&!drinks.length>0 )&& <h1>Sorry No result</h1>}
                    {
                        (!spinner &&!drinks.length>0 ) && <Category></Category>
                    }
        </div>
    );
};

export default CategoryData;