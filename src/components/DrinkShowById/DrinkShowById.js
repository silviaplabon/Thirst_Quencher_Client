import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext, ValueContext } from '../../App';
import OrderIsExist from '../OrderIsExist/OrderIsExist';

const DrinkShowById = (props) => { 
    let history = useHistory();
    const state = props.state;
    const [value,setValue]=useContext(ValueContext);
    const { strDrink, strDrinkThumb, idDrink,_id,price} = props.drink;
    const [drinkDetailById, setDrinkDetailById] = useState();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

        const handleOrderData=(idDrink)=>{
            fetch(`https://sleepy-plains-42535.herokuapp.com/SingleOrderDataShow/${idDrink}/${loggedInUser?.email}`)
            .then(res => res.json())
            .then(data => {
                if(data!=false){
                    setValue(true);
                    console.log(data)
                    console.log(true,"drinkbyid")
                    console.log(value,"silvia");   
                    return true;
                }
                else{
                    setValue(false);
                    console.log(false,"drinkbyid")
                }
            })
        }

    const handleDetailsId = ((_id,idDrink) => {
        handleOrderData(idDrink);
        history.push(`/user/drinksById/${_id}`);   
    })
 
    return (
        <>
        <div className="col mt-3 " onClick={() => handleDetailsId(_id,idDrink)}> <OrderIsExist idDrink={idDrink}/>
            <div className="card h-100 cardStyle" >
                <img src={strDrinkThumb} className="card-img-top" alt="..." />
                <div className="card-body cardBodyStyle">
                    <h6 className="card-title text-center">{strDrink}</h6>
                </div>
            </div>
        </div>
</>
    );
};

export default DrinkShowById;

