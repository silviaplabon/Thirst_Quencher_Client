import React, { useEffect, useState } from 'react';
import DrinkShowByName from '../DrinkShowByName/DrinkShowByName';

import './Home.css'
const Home = () => {
    const [popularDrinks, setPopularDrinks] = useState([])
    const [popularIngredients, setPopularIngredient] = useState([])
    const [latestDrinks, setLatestDrinks] = useState([])
    const [randomIngredients, setRandomIngredients] = useState([])
    const [randomDrinks, setRandomDrinks] = useState([])

    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/PopularDrinks')
            .then(res => res.json())
            .then(data => setPopularDrinks(data))

        fetch('https://sleepy-plains-42535.herokuapp.com/PopularIngredients')
            .then(res => res.json())
            .then(data => setPopularIngredient(data))

        fetch('https://sleepy-plains-42535.herokuapp.com/LatestDrinks')
            .then(res => res.json())
            .then(data => setLatestDrinks(data))

        fetch('https://sleepy-plains-42535.herokuapp.com/RandomIngredients')
            .then(res => res.json())
            .then(data => setRandomIngredients(data))

        fetch('https://sleepy-plains-42535.herokuapp.com/RandomDrinks')
            .then(res => res.json())
            .then(data => setRandomDrinks(data))
    }, [])


    return (
        <div className="container">
            <h5 className="text-center">Popular Drinks</h5>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    popularDrinks.map(drink => <DrinkShowByName drink={drink} state={true}></DrinkShowByName>)
                }
            </div>
            <h5 className="text-center mt-5">Popular Ingredients</h5>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    popularIngredients.map(drink => <DrinkShowByName drink={drink} state={false}></DrinkShowByName>)
                }
            </div>
            <h5 className="text-center mt-5">Latest Drinks</h5>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    latestDrinks.map(drink => <DrinkShowByName drink={drink} state={true}></DrinkShowByName>)
                }
            </div>
            <h5 className="text-center mt-5">Random Ingredients</h5>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    randomIngredients.map(drink => <DrinkShowByName drink={drink} state={false}></DrinkShowByName>)
                }
            </div>
            <h5 className="text-center mt-5">Random  Drinks</h5>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    randomDrinks.map(drink => <DrinkShowByName drink={drink} state={true}></DrinkShowByName>)
                }
            </div>
        </div>
    );
};

export default Home;