import React from 'react';
import { useHistory } from 'react-router';
import './GlassCategorySearch.css'

const GlassCategorySearch = (props) => {
    const state = props.state;
    const history = useHistory();
    const handleChangeGlass = event => {
        const name = document.getElementById('nameValue').value;
        history.push(`/filter/glass/${name}`)
    }
    const handleChangeCategory = event => {
        const name = document.getElementById('nameValue').value;
        history.push(`/filter/category/${name}`)
    }
    console.log(state)
    return (
        <div className="container ">
            {state ?
                <div className="w-75 m-auto p-3 ">
                    <h6 className="text-center">Do you want to filter by Glass  ?</h6>
                    <input className="form-control me-3 mt-2" type="search" placeholder="Search" aria-label="Search" id="nameValue"/>
                    <input type="submit" onClick={handleChangeGlass}  className="btn btn-lg btnColor w-100 mt-3"/></div>
                :
                <div className="w-75 p-3 m-auto" >

                    <h6 className="text-center">Do you want to filter by Category ?</h6>
                    <input className="form-control me-3 mt-2" type="search" placeholder="Search" aria-label="Search" id="nameValue" />
                    <input type="submit" className="btn btn-lg btn-primary w-100 mt-3" onClick={handleChangeCategory} />
                </div>
            }
        </div>
    );
};

export default GlassCategorySearch;