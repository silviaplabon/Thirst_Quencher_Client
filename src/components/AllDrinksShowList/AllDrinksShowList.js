import React, { useEffect, useState } from 'react';
import DrinkFromDB from '../DrinkFromDB/DrinkFromDB';
import Footer from '../Footer/Footer';
const AllDrinksShowList = () => {
    const [drinks,setDrinks]=useState([]);
    const [spinner,setSpinner]=useState(true)
    useEffect(() => {
        fetch(' https://sleepy-plains-42535.herokuapp.com/allDrinksCollectionShow')
            .then(res => res.json())
            .then(data => {
                setDrinks(data)
                setSpinner(false)
            })
    }, [])
    // https://sleepy-plains-42535.herokuapp.com/

    return (
        <>
        <div className="container">
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
          
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 ">
            {
                drinks.map(drink=><DrinkFromDB drink={drink}></DrinkFromDB>)  
            }
              </div>
        </>
        }</div>
        <Footer></Footer>
        </>
    );


};

export default AllDrinksShowList;