import React from 'react';
import { useHistory } from 'react-router';
import './Filter.css'
import Footer from '../../Shared/Footer/Footer'
import FilterDataShow from '../FilterDataShow/FilterDataShow';

const Filter = () => {
    const history = useHistory();

    const filterData = [
        { name: 'Alcoholic', image: 'https://i.ibb.co/8BSm6yg/filteralcoholic.jpg' },
        { name: 'Non Alcoholic', image: 'https://i.ibb.co/NLZGG3T/Non-Alcoholic.jpg' },
        { name: 'Optional Alcoholic', image: 'https://i.ibb.co/kQczQJb/optional-alcohol.jpg' },
        { name: 'Ingredient', image: 'https://i.ibb.co/YpvTbJQ/ingredient.jpg' },
        { name: 'Glass', image: 'https://i.ibb.co/bJMCXP7/glass.jpg' },
        { name: 'Category', image: 'https://i.ibb.co/cKBT3jp/category.jpg' }
    ]


    return (
        <div className="my-5" id="filterSectionLink">
            <h1 className="text-center h1Gallery mt-5 ">Our Gallery</h1>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3">
                {
                    filterData.map(filter => <FilterDataShow filter={filter}></FilterDataShow>)
                }
            </div>
        </div>
    );
};

export default Filter;