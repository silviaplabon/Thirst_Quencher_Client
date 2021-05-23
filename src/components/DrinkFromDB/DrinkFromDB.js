import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

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
    <div className="col">
      <div className="card h-100">
        <img src={strDrinkThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.drink.strDrink}</h5>
          <p className="card-text">{strAlcoholic}</p>
        </div>
        <div className="card-footer d-flex justify-content-between  align-items-between">
          {
            price ?<h3 className=" text-warning fw-bold">${price}</h3>:   
             <input type="number" name="price" className="form-control w-50" placeholder="price" onBlur={handleChange} />
          }
          {
            (loggedInUser.admin==true&&loggedInUser.role=="Administrator" )&&  <button className="btn btn-primary text-white" onClick={() => handleDelete(_id)} >Delete</button>
          }
        
        </div>
      </div>
    </div>
  );
};

export default DrinkFromDB;