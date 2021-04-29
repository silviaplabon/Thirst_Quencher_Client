import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GlassCategoryListShow from '../GlassCategoryListShow/GlassCategoryListShow';

import './GlassCategorySearch.css'
const GlassCategorySearch = (props) => {
    console.log(props, "glasscategorysearch")
    const state = props.state;
    const history = useHistory();
    const [glasses, setGlasses] = useState([]);
    const [categories, setCategories] = useState([]);
    const handleChangeGlass = event => {
        const name = document.getElementById('nameValue').value;
        history.push(`/filter/glass/${name}`)
    }
    const handleChangeCategory = event => {
        const name = document.getElementById('nameValue').value;
        history.push(`/filter/category/${name}`)
    }

   

    console.log(state, "sidkedkecrcrf")
    useEffect(() => {
        {
            state == 3 && 
        fetch(` https://sleepy-plains-42535.herokuapp.com/filter/glassListShow`)
            .then(res => res.json())
            .then(data => {
                setGlasses(data)
            })
        }
        {
            state == 4 && 
            fetch(` https://sleepy-plains-42535.herokuapp.com/filter/categoryListShow`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
        }
    }, [])


    return (
        <div className="containerColorGlassCategory">
            <div className="container ">
                {(state == 1 || state == 3) &&
                    <div className="w-75 m-auto p-3 d-flex flex-column ">
                        <h6 className="text-center fw-bold">Do you want to filter by Glass  ?</h6>
                        <input className="form-control me-3 mt-2" type="search" placeholder="Glass" aria-label="Search" id="nameValue" />
                        <input type="submit" onClick={handleChangeGlass} className=" fw-bold btn  btnColorSearch w-50 mt-3 text-center container m-auto" style={{ color: 'white' }} /></div>

                }
                {
                    (state == 2 || state == 4) &&
                    <div className="w-75 p-3 m-auto d-flex flex-column" >
                        <h6 className="text-center fw-bold">Do you want to filter by Category ?</h6><br />
                        <input className="form-control me-3 mt-2 fw-bold" type="search" placeholder="Category" aria-label="Search" id="nameValue" />
                        <input type="submit" className="btn fw-bold  btnColorSearch w-50 m-auto container mt-3 justify-content-center align-items-center" onClick={handleChangeCategory} style={{ color: 'white' }} />
                    </div>
                }
                {
                    (glasses.length > 1 && state == 3) &&
                    <div className="row row-cols-1  row-cols-xs-2 row-cols-md-3 row-cols-lg-3 row-cols-xxl-5 justify-content-center align-items-center">
                         {

                                glasses.map(glass => <GlassCategoryListShow data={glass} state={true}></GlassCategoryListShow>)
                            }
                            </div>
                    

                }
                {
                    (categories.length > 1 && state == 4) &&
                    <div className="row row-cols-1 row-cols-xs-2 row-cols-md-3 row-cols-lg-3 row-cols-xxl-5  justify-content-center align-items-center ">
                        {
                            categories.map(category => <GlassCategoryListShow data={category} state={false}></GlassCategoryListShow>)
                        }
                    </div>

                }

            </div>
        </div>
    );
};

export default GlassCategorySearch;