import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import './DrinkShowByName.css'
import { UserContext } from '../../App';
import Admin from '../Admin/Admin';
import ManageProducts from '../ManageProducts/ManageProducts';
const DrinkShowByName = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const drinkname = props.drinkname;
    let history = useHistory();
    const { name, imageURL, _id } = props.drink;
    const state = props.state;
    const btnshow = props.btnshow;
    const handleDetailsDrink = ((name, state) => {
        if (!btnshow) {
            {
                state == true ? history.push(`/drinksByName/${name}`) : history.push(`/ingredientsByName/${name}`)
            }
        }
    })
    const handleDelete = (drinkname,id) => {
        {loggedInUser.role=="Administrator" ?

            fetch(` https://sleepy-plains-42535.herokuapp.com/deleteProduct/${drinkname}/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(res => {
                    if (res) {
                        //   event.target.parentNode.style.display="none"
                        alert('Succesfully  deleted !')
                    }
                })
            
            :
            alert("Admin disable this option for user. ")
        }

        
    }
    const handleUpdate = (drinkname, id) => {
        {
            loggedInUser.role=="Administrator" ? history.push(`/admin/${drinkname}/${id}`):
            alert("Admin disable this option for user.")
        }
       

    }

    return (
        <div className="col">
            <div className="card h-100 cardStyle" onClick={() => handleDetailsDrink(name, state)}>
                
                <img src={imageURL} className="card-img-top w-100 heightImageDrink" alt="" />
                <div className="card-body cardBodyStyle h6fontStyle h-25">
                    <h6 className="text-center h6Style">{name}</h6>
                    {
                        btnshow &&
                        <div className="d-flex justify-content-between cursorEditDelete">
                            <FontAwesomeIcon icon={faEdit} className="text-warning" onClick={() => handleUpdate(drinkname, _id)} />
                            <FontAwesomeIcon icon={faTrash} className="text-danger" onClick={() => handleDelete( drinkname, _id)} />
                        </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default DrinkShowByName;