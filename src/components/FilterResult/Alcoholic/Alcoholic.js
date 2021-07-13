import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DrinkShowById from '../../Home/DrinkShowById/DrinkShowById';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';


const Alcoholic = () => {
    const [drinks,setDrinks] = useState([]);
    useEffect(() => {
        let url = ` https://sleepy-plains-42535.herokuapp.com/filter/Alcoholic`;
        fetch(url)
            .then(res => res.json())
            .then(data => {setDrinks(data);})
    }, [])
    const drinksUpdate=drinks.slice(0,100);
    return (
        <><Header></Header>
        <div className="container">
            <h5 className="text-center mt-4">Browse Alcoholic</h5>
            <h5>{drinks?.length}</h5>
        <div className="row row-cols-2  row-cols-md-4 row-cols-lg-5 g-4 mt-3">
            {
             drinksUpdate?.map(drink => <DrinkShowById drink={drink} state={true} ></DrinkShowById>)
            }
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Alcoholic;