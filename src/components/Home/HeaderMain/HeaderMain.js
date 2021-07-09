import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarAndCrescent, faStarHalf, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import './HeaderMain.css'


const HeaderMain = () => {
    return (
        <div className="headerMainContainer pt-5" >
            <h2 className="text-center pt-5 " style={{ color: '#f01737' }}>Welcome to our</h2>
            <h2 className="text-center text-white h2HeaderMainTitle">Thirst Quencher</h2>
            <h3 className="text-center text-white"> <img src="https://cdn.shopify.com/s/files/1/0014/0673/0351/files/wine-icon_small.png"
            /> Cocktails around the world <img src="https://cdn.shopify.com/s/files/1/0014/0673/0351/files/wine-icon_small.png"
                />
            </h3>
            <h6 className="text-center text-white h6HeaderMainFont">        All you need is a beer. First, it needs to be chilled, and second, it needs to be of ours.You deserve to relax.  </h6>
            <div className="d-flex mt-5 align-items-center justify-content-center">
                <button className=" btn" style={{backgroundColor:'#f01737',color:'white'}}>Buy Now</button>
            </div>
        </div>
    );
};

export default HeaderMain;