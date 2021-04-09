import React from 'react';

const IngredientsShow = (props) => {
    const {name,quantity}=props.data;
    console.log(name,quantity)
    return (
        <div className="col">
            <div className="card h-100">
                <img src="https:www.thecocktaildb.com/images/ingredients/`${name}`-Medium.png" class="card-img-top" alt="..." />
                <div class="card-body cardHomeDrink" >
                    <p class="card-text text-center">{quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default IngredientsShow;