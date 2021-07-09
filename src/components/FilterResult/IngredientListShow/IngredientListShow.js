import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import DrinkShowById from '../../Home/DrinkShowById/DrinkShowById'

const IngredientListShow = (props) => {
  const history=useHistory();
  const { idIngredient, strIngredient, strDescription } = props.ingredient
  const handleDataShow = (strIngredient) => {
    history.push(`/filter/ingredient/${strIngredient}`)
  }

  return (
    <div className="col mt-2" onClick={() => handleDataShow(strIngredient)}>
      <div className="card h-100 ">
        <div className=" d-flex justify-content-center align-items-center ">
          <img src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}-Medium.png`} className="card-img-top  img-fluid h-75 w-75" alt="..." />
        </div>
        <div className="card-body card-footer">
          <h6 className=" text-center ">{strIngredient}</h6>
        </div>
      </div>
    </div>

  );
};

export default IngredientListShow;
// useEffect(()=>{
//     fetch(' https://sleepy-plains-42535.herokuapp.com/filter/ingredientList', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(ingredient)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data) {
//                     console.log(data)
//                     alert('updated') 
//                 }
//             })
//   })
// useEffect(() => {
//   let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${props.ingredient}`;
//   console.log(url)
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {setIngredient(data?.ingredients[0]);console.log(data.ingredients[0],"kdkkwkd"); })
// }, [props.ingredient])
