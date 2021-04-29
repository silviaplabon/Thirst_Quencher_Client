import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DrinkShowByName from '../DrinkShowByName/DrinkShowByName';
import ReviewCollection from '../ReviewCollection/ReviewCollection';

import './Home.css'
import Footer from '../Footer/Footer';
const Home = () => {
    const [popularDrinks, setPopularDrinks] = useState([])
    const [popularIngredients, setPopularIngredient] = useState([])
    const [latestDrinks, setLatestDrinks] = useState([])
    const [randomIngredients, setRandomIngredients] = useState([])
    const [randomDrinks, setRandomDrinks] = useState([])
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch(' https://sleepy-plains-42535.herokuapp.com/productdata/PopularDrinks')
            .then(res => res.json())
            .then(data => {
                setPopularDrinks(data)
                setSpinner(false)
            })

        fetch(' https://sleepy-plains-42535.herokuapp.com/productdata/PopularIngredients')
            .then(res => res.json())
            .then(data => setPopularIngredient(data))

        fetch(' https://sleepy-plains-42535.herokuapp.com/productdata/LatestDrinks')
            .then(res => res.json())
            .then(data => setLatestDrinks(data))

        fetch(' https://sleepy-plains-42535.herokuapp.com/productdata/RandomIngredients')
            .then(res => res.json())
            .then(data => setRandomIngredients(data))

        fetch(' https://sleepy-plains-42535.herokuapp.com/productdata/RandomDrinks')
            .then(res => res.json())
            .then(data => setRandomDrinks(data))
    }, [])


    return (
        <div className="containerColor">
            { spinner ?
            <div className="text-center  mb-5 pt-5 pb-5 spinnerClass">
                 <div className="spinner-grow spinnerColor" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinnerColor" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinnerColor" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
                :
                <div className="container pt-5">
                    <h5 className="text-center bgHomeStyle p-3 fw-bold mb-3">Popular Drinks</h5>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 pt-1">
                        {
                            popularDrinks.map(drink => <DrinkShowByName drink={drink} state={true} btnshow={false} drinkname="PopularDrinks"></DrinkShowByName>)
                        }
                    </div>
                    <h5 className="text-center mt-5  bgHomeStyle  p-3 fw-bold mb-3">Popular Ingredients</h5>
                    <div className="row row-cols-2 row-cols-sm-3  row-cols-md-4 g-4 pt-1">
                        {
                            popularIngredients.map(drink => <DrinkShowByName drink={drink} state={false} btnshow={false} drinkname="PopularIngredients"></DrinkShowByName>)
                        }
                    </div>
                    <h5 className="text-center mt-5  bgHomeStyle  p-3 fw-bold mb-3">Latest Drinks</h5>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 pt-1">
                        {
                            latestDrinks.map(drink => <DrinkShowByName drink={drink} state={true} btnshow={false} drinkname="LatestDrinks"></DrinkShowByName>)
                        }
                    </div>
                    <h5 className="text-center mt-5  bgHomeStyle p-3 fw-bold mb-3">Random Ingredients</h5>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 pt-1">
                        {
                            randomIngredients.map(drink => <DrinkShowByName drink={drink} state={false} btnshow={false} drinkname="RandomIngredients"></DrinkShowByName>)
                        }
                    </div>
                    <h5 className="text-center mt-5  bgHomeStyle p-3 fw-bold mb-3">Random  Drinks</h5>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 pt-1">
                        {
                            randomDrinks.map(drink => <DrinkShowByName drink={drink} state={true} btnshow={false} drinkname="RandomDrinks"></DrinkShowByName>)
                        }
                    </div>
                </div>
            }
            <ReviewCollection></ReviewCollection>
            <Footer></Footer>
            
        </div>

    );
};

export default Home;