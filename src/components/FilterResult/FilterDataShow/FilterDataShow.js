import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarAndCrescent, faStarHalf, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import './FilterDataShow.css'
import { useHistory } from 'react-router-dom';

const FilterDataShow = (props) => {
    const { name, image } = props.filter;
    const history = useHistory();

    const handleOnclick = () => {
        if (name == 'Alcoholic') {
            history.push('/auth/filter/alcoholic')
        }
        if (name == 'Glass') {
            history.push('/auth/filter/glass')
        }
        if (name == 'Non Alcoholic') {
            history.push('/auth/filter/nonalcoholic')
        }
        if (name == 'Optional Alcoholic') {
            history.push('/auth/filter/optionalalcoholic')
        }
        if (name == 'Category') {
            history.push('/auth/filter/category')
        }
        if (name == 'Ingredient') {
            history.push('/auth/filter/ingredient')
        }

    }




    return (
        <div className="col p-0" >
            <div className="card  w-100 text-center" style={{ height: '350px' }}  >
                <div className="d-flex justify-content-center align-items-center h-100 contain ">
                    <div className="card-body p-0 h-100 w-100">
                        <img src={image} className="img-fluid w-100 h-100" alt="..." />
                    </div>
                    <div className=" button overlay d-flex justify-content-center align-items-center" id="overlays"  >
                        <div className="d-flex-row align-items-center justify-content-center">
                            <h4 className="text-center text-white ">{name}</h4>
                            <button className="text-center btn buttonView " onClick={() => handleOnclick()} >View Collections</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default FilterDataShow;