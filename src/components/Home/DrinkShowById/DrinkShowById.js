import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext, ValueContext } from '../../../App';
import OrderIsExist from '../../Shared/OrderIsExist/OrderIsExist';

const DrinkShowById = (props) => {
    let history = useHistory();
    const state = props.state;
    const [value, setValue] = useContext(ValueContext);
    const { strDrink, strDrinkThumb, idDrink, _id, price } = props.drink;
    const [drinkDetailById, setDrinkDetailById] = useState();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    // extra code

    const [drinkExist, setDrinkExist] = useState(false);
    
    useEffect(() => {
        fetch(`https://sleepy-plains-42535.herokuapp.com//drinkIsExist/${idDrink}/${strDrink}`)
            .then(res => res.json())
            .then(data => {
                if (data != false) {
                    setDrinkExist(false);
                }
                else {
                    setDrinkExist(true);
                }
            })
            }, [])

        //
        const saveToDatabase=(drinkdata)=>{
            fetch(`https://sleepy-plains-42535.herokuapp.com//addDrinksCollection`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(drinkdata)
        }) 
        .then(res => alert('Drink Entered Successfully'))
        }
    



        const handleOrderData = (idDrink) => {
            fetch(`https://sleepy-plains-42535.herokuapp.com/SingleOrderDataShow/${idDrink}/${loggedInUser?.email}`)
                .then(res => res.json())
                .then(data => {
                    if (data != false) {
                        setValue(true);
                        console.log(data)
                        console.log(true, "drinkbyid")
                        console.log(value, "silvia");
                        return true;
                    }
                    else {
                        setValue(false);
                        console.log(false, "drinkbyid")
                    }
                })
        }

        const handleDetailsId = ((_id, idDrink) => {
            handleOrderData(idDrink);
            history.push(`/user/drinksById/${idDrink}`);
        })

        return (
            //
            <>
                <div className="col mt-3 "  onClick={() => handleDetailsId(_id, idDrink)}> <OrderIsExist idDrink={idDrink} />
                    <div className="card h-100 cardStyle" >
                        <img src={strDrinkThumb} className="card-img-top" alt="..." />
                        <div className="card-body cardBodyStyle">
                            {/* {
                                drinkExist == true && <button className="btn btn-primary" onClick={()=>saveToDatabase(props.drink)}>ADD</button>
                            } */}
                            <h6 className="card-title text-center p-2">{strDrink}</h6>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default DrinkShowById;

