import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
const DrinkShowById = (props) => { 
    let history = useHistory();
    const state = props.state;
    const { strDrink, strDrinkThumb, idDrink,_id,price} = props.drink;
    console.log(state, "drinkshowById")
    const [drinkDetailById, setDrinkDetailById] = useState();
    const handleDetailsId = ((_id) => {
        history.push(`/user/drinksById/${_id}`);
        // window.location=`/user/drinksById/${_id}`;
        
    })


    
    return (
        <div className="col mt-3 " onClick={() => handleDetailsId(_id)}>
            <div className="card h-100 cardStyle" >
                <img src={strDrinkThumb} className="card-img-top" alt="..." />
                <div className="card-body cardBodyStyle">
                    <h6 className="card-title text-center">{strDrink}</h6>
                </div>
            </div>
        </div>

    );
};

export default DrinkShowById;

