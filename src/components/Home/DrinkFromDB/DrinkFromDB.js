import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import './DrinkFromDB.css'
const DrinkFromDB = (props) => {
  // console.log(props);
  const { _id, strDrink, strDrinkThumb, price,strAlcoholic,strVideo } = props.drink;
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const handleDelete = (id) => {
    fetch(` https://sleepy-plains-42535.herokuapp.com/deleteGlass/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          //   event.target.parentNode.style.display="none"
          alert('Succesfully  deleted !')
        }
      })
  }


  const handleChange = event => {
      const price = {
        price: event.target.value
      };
  
    fetch(` https://sleepy-plains-42535.herokuapp.com/updateDrinksPrice/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(price)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
        }
      })

  }

  return (
    <div className="col mt-3">
      <div className="card h-100">
        <img src={strDrinkThumb} className="card-img-top" alt="..." />
        <div className="d-flex justify-content-center align-items-center">
          <h6 className="fw-bold drinkTitleDB">{props.drink.strDrink}</h6>
        </div>
        <div className=" d-flex justify-content-between  align-items-between " style={{padding:'6px'}}>
          {
            price ?<h4 className=" text-warning fw-bold">${price}</h4>:   
             <input type="number" name="price" className="form-control w-50" placeholder="price" onBlur={handleChange} />
          }
          {
            (loggedInUser.admin==true&&loggedInUser.role=="Administrator" )&&  <button className="btn  btnDeleteDrink px-1 py-2 text-white" style={{backgroundColor:'#27211D'}} onClick={() => handleDelete(_id)} >Delete</button>
          }
        
        </div>
      </div>
    </div>
  );
};

export default DrinkFromDB;