import React, { useEffect, useState } from 'react';
import DrinkFromDB from '../../Home/DrinkFromDB/DrinkFromDB';
import Footer from '../../Shared/Footer/Footer'
const AllDrinksShowList = () => {
    const [drinks,setDrinks]=useState([]);
    const [spinner,setSpinner]=useState(true)
    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/allDrinksCollectionShow')
            .then(res => res.json())
            .then(data => {
                setDrinks(data)
                setSpinner(false)
            })
    }, [])
    // https://sleepy-plains-42535.herokuapp.com/
    console.log(drinks.length);

    return (
        <>
        <div className=" mt-2">
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
                :<>
                


                <h2 className="text-center h1Gallery">All Drinks Collection</h2>
          
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 ">
            {
                drinks.map(drink=><DrinkFromDB drink={drink}></DrinkFromDB>)  
            }
              </div>
        </>
        }</div>
    
        </>
    );


};

export default AllDrinksShowList;