
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext, ValueContext } from '../../../App';
import OrderIsExist from '../../Shared/OrderIsExist/OrderIsExist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import './DrinkShowByName.css'
import Admin from '../../Admin/Admin/Admin'
import ManageProducts from '../../Admin/ManageProducts/ManageProducts';
import { AnimationWrapper } from 'react-hover-animation'
import { ParallaxHover } from 'react-parallax-hover';
import HoverImage from "react-hover-image";



const DrinkShowByName = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [value,setValue]=useContext(ValueContext);
    const drinkname = props.drinkname;
    let history = useHistory();
    const { name, imageURL, _id,idDrink } = props.drink;
    const state = props.state;
    const btnshow = props.btnshow;
    const handleOrderData=(idDrink)=>{
        fetch(`https://sleepy-plains-42535.herokuapp.com/SingleOrderDataShow/${idDrink}/${loggedInUser?.email}`)
        .then(res => res.json())
        .then(data => {
            if(data!=false){
                setValue(true);
                console.log(data)
                console.log(true,"drinkbyName")
                console.log(value,"silvia");   
                return true;
            }
            else{
                setValue(false);
                console.log(false,"drinkbyName")
            }
        })
    }
    

    const handleDetailsDrink = ((name, state,idDrink) => {
        // handleOrderData(idDrink);
        if (!btnshow) {
            {
                state == true ? history.push(`/drinksByName/${name}`) : history.push(`/ingredientsByName/${name}`)
            }
        }
    })
   


    const handleDelete = (drinkname,id) => {
        loggedInUser.role=="Administrator" ?
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

    const handleUpdate = (drinkname, id) => {
            loggedInUser.role=="Administrator" ? history.push(`/admin/${drinkname}/${id}`):
            alert("Admin disable this option for user.")
    }

    return (
        <div className="col drinkShowByNameCursor">
             <AnimationWrapper config={{
        color: {
          initial: 'black',
          onHover: 'red'
        },
        opacity:{
            initial:1,
            onHover:1
        },
       
      }}>
    
            <div className="card h-100 cardStyle rounded" onClick={() => handleDetailsDrink(name, state,idDrink)}>
                <img src={imageURL} className="card-img-top w-100 heightImageDrink" alt="" />
                <div className="card-body cardBodyStyle h6fontStyle h-25">
                   
                    <h6 className="h6Style text-center mt-2">{name}</h6>
                
                    {
                        btnshow &&
                        <div className="d-flex justify-content-between cursorEditDelete">
                            <FontAwesomeIcon icon={faEdit} className="text-warning" onClick={() => handleUpdate(drinkname, _id)} />
                            <FontAwesomeIcon icon={faTrash} className="text-danger" onClick={() => handleDelete( drinkname, _id)} />
                        </div>
                        
                    }
                    {
                        state==false && <div className="newDivSil">
                            
                            </div>
             
                    } 
                      </div>
            </div>
            </AnimationWrapper>
        
        </div>

    );
};

export default DrinkShowByName;