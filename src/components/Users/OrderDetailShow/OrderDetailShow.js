import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faMinus, faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './OrderDetailShow.css'
import { useHistory } from 'react-router';
import { CartContext, DeleteContext, UserContext, ValueContext } from '../../../App';
import OrderLength from '../../Shared/OrderLength/OrderLength'

const OrderDetailShow = (props) => {
    console.log(props)

    const [cart, setCart] = useContext(CartContext)
    const [value, setValue] = useContext(ValueContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const index = props.index;
    // console.log(props)
    // console.log(count)
    const { _id } = props.order;
    const [drink, setDrink] = useState([]);
    const [order, setOrder] = useState([])
    const [deleteUpdate, setDeleteUpdate] = useContext(DeleteContext);

    const history = useHistory()
    const [state, setState] = useState(true);
    setDeleteUpdate(true)
    useEffect(() => {
        let url = `https://sleepy-plains-42535.herokuapp.com/SingleOrderDetailFinding/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                setState(false);
                // document.getElementsByClassName('deleteDisplayNone')[count].style.display="block";
            })
    }, [state == true])
    const { strDrink, quantity, idDrink, price, strDrinkThumb } = order;

    useEffect(() => {
        let url = `https://sleepy-plains-42535.herokuapp.com/orderProductFindingFromDB/${idDrink}/${strDrink}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDrink(data);
            })
    }, [order.length > 0])

    const handleAddOrderByPlus = (orderPrice, orderQuantity, drinkprice) => {

        const detailsUpdate = {
            quantity: (1 + orderQuantity),
            price: (parseInt(orderQuantity) * parseInt(drinkprice))
        }
        // console.log(detailsUpdate);
        fetch(`https://sleepy-plains-42535.herokuapp.com/updateNewPriceAndQuantity/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(detailsUpdate)
        })
            .then(res => res.json())
            .then(data => {
                setState(true);


            })
    }
    const handleDeleteOrder = (id) => {
        fetch(`https://sleepy-plains-42535.herokuapp.com/deleteSingleOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                document.getElementsByClassName('deleteDisplayNone')[index].style.display = "none";

                console.log(index)
                if (res) {
                    fetch(' https://sleepy-plains-42535.herokuapp.com/SingleOrderUser/orderLength?email=' + loggedInUser?.email,
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }
                    )
                        .then(res => res.json())
                        .then(data => {
                            setCart(data);
                            setValue(true);
                        })
                    setState(true);
                    setDeleteUpdate(true);
                }


            })
    }
    const handleAddOrderByMinus = (orderPrice, orderQuantity, drinkprice) => {
        const details = {
            quantity: (orderQuantity - 1),
            price: (orderQuantity * drinkprice)
        }
        fetch(` https://sleepy-plains-42535.herokuapp.com/updateNewPriceAndQuantity/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setState(true)

            })

    }
    const orderQuantity = quantity;
    const orderPrice = price;
    const drinkprice = (orderPrice / orderQuantity);



    return (
        <>
            <ul className="list-group ulStyleOrder deleteDisplayNone">
                <li className="list-group-item  liStyleOrder">
                    <span className="listStyleOrder imageOrderStyle"><img src={strDrinkThumb} className="img-fluid w-50 h-50" /></span>
                    <span className="listStyleOrder  nameOrderStyle fw-bold">{strDrink}</span>
                    <span className="listStyleOrder  quantityOrderStyle fw-bold text-center">
                        <FontAwesomeIcon onClick={() => handleAddOrderByPlus(orderPrice, orderQuantity, drinkprice)} 
                        style={{ cursor: 'pointer' }} className="iconSize me-2 fs-5" icon={faPlusSquare} />{quantity}

                        {
                            orderQuantity > 1 ? <FontAwesomeIcon onClick={() => handleAddOrderByMinus(orderPrice, orderQuantity, drinkprice)} style={{ cursor: 'pointer' }} className="iconSize ms-2 fs-5 " icon={faMinusSquare} />
                                : <FontAwesomeIcon className="iconSize ms-2 fs-5 " icon={faMinusSquare} />
                        }
                    </span>
                    <span className="listStyleOrder   priceOrderStyle fw-bold text-center">{(price * orderQuantity)}</span>
                    <span className="listStyleOrder text-center " style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon className="iconSize fs-4" style={{ color: '#ff2400' }} onClick={() => handleDeleteOrder(_id)} icon={faTrashAlt} /></span>
                </li>
            </ul>
        </>
    );
};

export default OrderDetailShow;