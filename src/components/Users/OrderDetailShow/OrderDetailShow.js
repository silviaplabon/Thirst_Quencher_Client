import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faMinus, faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './OrderDetailShow.css'
import { useHistory } from 'react-router';


const OrderDetailShow = (props) => {
    const { strDrink, price, quantity, strDrinkThumb, _id,idDrink } = props.order;
    console.log(idDrink,strDrink)
    console.log(price,quantity)
    const [drink, setDrink] = useState([]);
    const orderQuantity=quantity;
    const orderPrice=price;
    const drinkprice=(orderPrice/orderQuantity);
    const history=useHistory()
    useEffect(() => {
        let url = `https://sleepy-plains-42535.herokuapp.com/orderProductFindingFromDB/${idDrink}/${strDrink}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDrink(data);
                console.log(data)
                alert(data)     
            })

    }, [props.order])

    const handleAddOrderByPlus = (orderPrice, orderQuantity, drinkprice) => {

        const detailsUpdate = {
            quantity: (1 + orderQuantity), 
            price: (parseInt(orderQuantity)* parseInt(drinkprice))
        }
        console.log(detailsUpdate);
        fetch(`https://sleepy-plains-42535.herokuapp.com/updateNewPriceAndQuantity/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(detailsUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data); alert('Inserted succesfully price and quantity');
            })
    }
    const handleDeleteOrder=(id)=>{
          fetch(`https://sleepy-plains-42535.herokuapp.com/deleteSingleOrder/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(res => {
                  if (res) {
                      alert('deleted successfully')
                      history.push('/user/OrderListShow/')
                  }
              })
    }
    const handleAddOrderByMinus = (orderPrice,orderQuantity, drinkprice) => {
        const details = {
            quantity: (orderQuantity-1), 
            price: (orderQuantity*drinkprice)
        }
            fetch(` https://sleepy-plains-42535.herokuapp.com/updateNewPriceAndQuantity/${_id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data); alert('Order placed successfully');
                })
        
    }



    return (
        <>
            <ul className="list-group ulStyle ">
                <li className="list-group-item  liStyle">
                    <span className=" listStyle imageOrderStyle"><img src={strDrinkThumb} className="img-fluid w-50 h-50" /></span>
                    <span className=" listStyle  nameOrderStyle fw-bold">{strDrink}</span>
                    <span className="listStyle  quantityOrderStyle fw-bold text-center">
                        <FontAwesomeIcon onClick={() => handleAddOrderByPlus(orderPrice, orderQuantity,drinkprice)} style={{cursor:'pointer'}} className="iconSize me-2 fs-5" icon={faPlusSquare} />{quantity}
                        
                        {
                            orderQuantity>1 ? <FontAwesomeIcon onClick={() => handleAddOrderByMinus(orderPrice, orderQuantity,drinkprice)} style={{cursor:'pointer'}} className="iconSize ms-2 fs-5 " icon={faMinusSquare} />
                            :<FontAwesomeIcon  className="iconSize ms-2 fs-5 " icon={faMinusSquare} />
                        }
                    </span>
                    <span className="listStyle   priceOrderStyle fw-bold text-center">{(price*orderQuantity)}</span>
                    <span className="listStyle text-center " style={{cursor:'pointer'}}>
                        <FontAwesomeIcon className="iconSize fs-4" style={{color:'#ff2400'}} onClick={() => handleDeleteOrder(_id)} icon={faTrashAlt} /></span>
                </li>
            </ul>
        </>
    );
};

export default OrderDetailShow;