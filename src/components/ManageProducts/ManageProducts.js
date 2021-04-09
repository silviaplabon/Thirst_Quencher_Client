import React, { useEffect, useState } from 'react';
import ManageDrinkShow from '../ManageDrinkShow/ManageDrinkShow';
const ManageProducts = () => {

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
        <div>
            {/* {
                popularDrinks.map(drink=><ManageDrinkShow drink={drink}></ManageDrinkShow>)
            } */}


        </div>
    );
};

export default ManageProducts;