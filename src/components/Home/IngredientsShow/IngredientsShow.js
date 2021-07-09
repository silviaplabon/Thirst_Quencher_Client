import React from 'react';

const IngredientsShow = (props) => {
    const {name,quantity}=props.data;

    // console.log(name,quantity)
    return (
        <div className="col">
            <div className="card h-100">
                <img src={`https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`} className="card-img-top" alt="..." />
                <div className="card-body cardHomeDrink" >
                    <p className="card-text text-center">{quantity}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default IngredientsShow;