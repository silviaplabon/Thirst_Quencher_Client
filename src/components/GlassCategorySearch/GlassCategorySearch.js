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
        <div className="containerColorGlassCategory">
        <div className="container ">
            {state ?
                <div className="w-75 m-auto p-3 d-flex flex-column ">
                    <h6 className="text-center fw-bold">Do you want to filter by Glass  ?</h6>
                    <input className="form-control me-3 mt-2" type="search" placeholder="Glass" aria-label="Search" id="nameValue"/>
                    <input type="submit" onClick={handleChangeGlass}  className=" fw-bold btn  btnColorSearch w-50 mt-3 text-center container m-auto" style={{color:'white'}}/></div>
                :
                <div className="w-75 p-3 m-auto d-flex flex-column" >
                    <h6 className="text-center fw-bold">Do you want to filter by Category ?</h6><br/>
                    <input className="form-control me-3 mt-2 fw-bold" type="search" placeholder="Category" aria-label="Search" id="nameValue" />
                    <input type="submit" className="btn fw-bold  btnColorSearch w-50 m-auto container mt-3 justify-content-center align-items-center"  onClick={handleChangeCategory} style={{color:'white'}}/>
                </div>
            }
        </div>
        </div>
    );
};

export default GlassCategorySearch;