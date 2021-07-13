import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarAndCrescent, faStarHalf, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import './HeaderMain.css'
import { useHistory } from 'react-router-dom';


const HeaderMain = () => {
    const history = useHistory();
    const [searchData,setSearchData]=useState(null);

    const handleChange = event => {
        const name = event.target.value;
        setSearchData(name);
    }
    const handleSearchOption=name=>{

        history.push(`/${name}`)
    }

    return (
        <div className="headerMainContainer pt-5" >
             <div className="d-flex mt-5 align-items-center justify-content-center">
                <form class="d-flex px-2">
                    <input class="form-control me-2" type="search" placeholder="Search" onChange={handleChange} aria-label="Search" />
                    <button class="btn searchOption "  style={{backgroundColor:'#f89808',color:'white'}} type="submit" onClick={()=>handleSearchOption(searchData)}>Search</button>
                </form>
            </div>
            <h2 className="text-center pt-5 text-white  h6HeaderMainFont">Welcome to our</h2>
            <h2 className="text-center  h2HeaderMainTitle" style={{ color: '#f89808' }}>Thirst Quencher</h2>
            <h3 className="text-center text-white"> <img src="https://cdn.shopify.com/s/files/1/0014/0673/0351/files/wine-icon_small.png"
            /> Cocktails around the world <img src="https://cdn.shopify.com/s/files/1/0014/0673/0351/files/wine-icon_small.png"
                />
            </h3>
            <h6 className="text-center text-white h6HeaderMainFont">
                All you need is a beer. First, it needs to be chilled, and second, it needs to be of ours.You deserve to relax.  </h6>
           
        </div>
    );
};

export default HeaderMain;