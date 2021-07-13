import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DrinkShowByName from "../DrinkShowByName/DrinkShowByName";
import ReviewCollection from "../Review/ReviewCollection/ReviewCollection";

import "./HomeDrink.css";
import Footer from "../../Shared/Footer/Footer";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {
  const [popularDrinks, setPopularDrinks] = useState([]);
  const [popularIngredients, setPopularIngredient] = useState([]);
  const [latestDrinks, setLatestDrinks] = useState([]);
  const [randomIngredients, setRandomIngredients] = useState([]);
  const [randomDrinks, setRandomDrinks] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [stateDrinks, setStateDrinks] = useState(0);
  const [stateIngredients, setStateIngredients] = useState(0);

  useEffect(() => {
    fetch(
      " https://sleepy-plains-42535.herokuapp.com/productdata/PopularDrinks"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularDrinks(data);
        setSpinner(false);
      });

    fetch(
      " https://sleepy-plains-42535.herokuapp.com/productdata/PopularIngredients"
    )
      .then((res) => res.json())
      .then((data) => setPopularIngredient(data));

    fetch(" https://sleepy-plains-42535.herokuapp.com/productdata/LatestDrinks")
      .then((res) => res.json())
      .then((data) => setLatestDrinks(data));

    fetch(
      " https://sleepy-plains-42535.herokuapp.com/productdata/RandomIngredients"
    )
      .then((res) => res.json())
      .then((data) => setRandomIngredients(data));

    fetch(" https://sleepy-plains-42535.herokuapp.com/productdata/RandomDrinks")
      .then((res) => res.json())
      .then((data) => setRandomDrinks(data));
  }, []);

  useEffect(() => {
    const elements = document.getElementsByClassName("homeH6Color");
    let i, len;
    for (i = 0, len = elements.length; i < len; i++) {
      if (i == stateDrinks) {
        elements[stateDrinks].style.backgroundColor = '#f89808';
      } else {
        elements[i].style.backgroundColor = 'white';
      }
    }
  }, [stateDrinks]);

  useEffect(() => {
    const elements = document.getElementsByClassName("ingredientsButton");
    let i, len;
    for (i = 0, len = elements.length; i < len; i++) {
      if (i ==stateIngredients) {
        elements[stateIngredients].style.backgroundColor = '#f89808';
      }
      else {
         elements[i].style.backgroundColor = 'white';
      }
    }
  }, [stateIngredients]);


  return (
    <div className="containerColor">
      {spinner ? (
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
      ) : (
        <div className="container pt-5">
         <h1 className="text-center homeDrinkTitle ">Our Drinks</h1>
          <div className="text-center h6HomeCursor text-center fw-bold mb-3 text-white">
            <button
              className=" btn homeH6Color  me-1" id="homeH6ColorActive" style={{backgroundColor:'#f89808'}}
              onClick={() => setStateDrinks(0)}
            >
              Popular Drinks
            </button>
            <button className=" btn homeH6Color ms-2 me-1" onClick={() => setStateDrinks(1)} >
              Latest Drinks
            </button>
            <button className=" btn homeH6Color ms-2 me-1" onClick={() => setStateDrinks(2)}>
              Random Drinks
            </button>
          </div >
         <ScrollAnimation animateIn="zoomIn"  duration={0.80}>
          {stateDrinks == 0 && (
            <>
              {/* <h5 className="text-center bgHomeStyle p-3 fw-bold mb-3 text-white">Popular Drinks</h5> */}
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 pt-1">
                {popularDrinks.map((drink) => (
                  <DrinkShowByName
                    drink={drink}
                    state={true}
                    btnshow={false}
                    drinkname="PopularDrinks"
                  ></DrinkShowByName>
                ))}
              </div>
            </>
          )}
          {stateDrinks == 1 && (
            <>
              {/* <h5 className="text-center mt-5  bgHomeStyle  p-3 fw-bold mb-3 text-white ">Latest Drinks</h5> */}
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 pt-1">
                {latestDrinks.map((drink) => (
                  <DrinkShowByName
                    drink={drink}
                    state={true}
                    btnshow={false}
                    drinkname="LatestDrinks"
                  ></DrinkShowByName>
                ))}
              </div>
            </>
          )}

          {stateDrinks == 2 && (
            <>
              {/* <h5 className="text-center mt-5  bgHomeStyle p-3 fw-bold mb-3 text-white">Random  Drinks</h5> */}
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 pt-1">
                {randomDrinks.map((drink) => (
                  <DrinkShowByName
                    drink={drink}
                    state={true}
                    btnshow={false}
                    drinkname="RandomDrinks"
                  ></DrinkShowByName>
                ))}
              </div>
            </>
          )}
          </ScrollAnimation>

          <h1 className="text-center homeDrinkTitle mt-5">Our Ingredients</h1>
          <div className="h6HomeCursor d-flex justify-content-center align-items-center fw-bold mb-2 text-white">
            <button className="ingredientsButton  btn  ms-2 me-1 mt-1" style={{backgroundColor:'#f89808'}}  id="ingredientsButtonActive" onClick={() => setStateIngredients(0)}>
              Popular Ingredients
            </button>
            <button
              className="ingredientsButton btn ms-2 me-1 mt-1"
              onClick={() => setStateIngredients(1)}
            >
              Random Ingredients
            </button>
          </div>
          <ScrollAnimation animateIn="zoomIn"  duration={0.80}>
          {stateIngredients == 0 && (
            <>
              {/* <h5 className="text-center mt-5  bgHomeStyle  p-3 fw-bold mb-3 text-white">Popular Ingredients</h5> */}
              <div className="row row-cols-2 row-cols-sm-3  row-cols-md-4 g-4 pt-1">
                {popularIngredients.map((drink) => (
                  <DrinkShowByName
                    drink={drink}
                    state={false}
                    btnshow={false}
                    drinkname="PopularIngredients"
                  ></DrinkShowByName>
                ))}
              </div>
            </>
          )}
          {stateIngredients == 1 && (
            <>
              {/* <h5 className="text-center mt-5  bgHomeStyle p-3 fw-bold mb-3 text-white">Random Ingredients</h5> */}
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 pt-1">
                {randomIngredients.map((drink) => (
                  <DrinkShowByName
                    drink={drink}
                    state={false}
                    btnshow={false}
                    drinkname="RandomIngredients"
                  ></DrinkShowByName>
                ))}
              </div>
            </>
          )}
          </ScrollAnimation>
        </div>
      )}
    </div>
  );
};

export default Home;
