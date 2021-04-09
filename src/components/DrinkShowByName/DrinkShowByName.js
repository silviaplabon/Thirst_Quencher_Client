import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import './DrinkShowByName.css'
const DrinkShowByName = (props) => {
    let history = useHistory();
    const {name,imageURL}=props.drink;
    const state=props.state;
    const handleDetailsDrink = ((name,state) => {
        console.log(state);
        {
            state==true ? history.push(`/drinksByName/${name}`) : history.push(`/ingredientsByName/${name}`)
        }
    })
   
    return (
        <div className="col">
            <div className="card h-100 cardStyle" onClick={ () => handleDetailsDrink(name,state)}>
                <img src={imageURL} className="card-img-top" alt="Please again browse" />
                <div className="card-body cardBodyStyle">
                    <h6 className="card-title text-center">{name}</h6>
                </div>
            </div>
        </div>

    );
};

export default DrinkShowByName;