
import React, { useContext, useEffect, useState } from 'react';
import './Drinks.css'
import  { SearchContext } from '../../Shared/Header/Header';
import DrinkShowById from '../../Home/DrinkShowById/DrinkShowById'
import { useParams } from 'react-router';


const Drinks = () => {
    const [drinks,setDrinks] = useState([]);
    const {name}=useParams();
    const [spinner,setSpinner]=useState(true)
    useEffect(() => {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {setDrinks(data.drinks); setSpinner(false);})
    }, [])
   

    // extra code

    return (
        <div className="containerColor mt-4">
            { spinner ?
                <div className="text-center  mb-5 pt-5 pb-5">
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
        <div className="container mt-5">
            <h5 className="text-center pt-4">Browse Search Result</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
            {
                drinks?.map(drink => <DrinkShowById drink={drink} state={true} ></DrinkShowById>)
            }
        </div>
        </div>
}          
        </div>
    )
};

export default Drinks;