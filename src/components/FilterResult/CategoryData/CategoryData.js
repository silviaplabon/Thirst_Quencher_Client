import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Category from '../Category/Category'
import DrinkShowById from '../../Home/DrinkShowById/DrinkShowById';
import GlassCategorySearch from '../GlassCategorySearch/GlassCategorySearch'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ReactPaginate from "react-paginate";


const CategoryData = () => {
    const [drinks, setDrinks] = useState([]);
    const { name } = useParams();
  
    const [spinner, setSpinner] = useState(true)
    const [state, setState] = useState(false);
    useEffect(() => {
        let url = ` https://sleepy-plains-42535.herokuapp.com/CategoryDataByName/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                    setDrinks(data); setSpinner(false);
            })
    }, [name])

    const [pageNumber, setPageNumber] = useState(0);
    const drinksPerPage = 10;
    const pagesVisited = pageNumber * drinksPerPage;
    let value;
    let i = 0;

    const pageCount = Math.floor(drinks.length / drinksPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };



    return (
        <>
        <div className="mb-5">
            {
                drinks.length >0 ? <><Header></Header>
                    <div className="container mb-5">
                        <h5 className="text-center mt-4">Browse Category</h5>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                           
                        {
                                drinks?.slice(pagesVisited, pagesVisited + drinksPerPage)
                                    .map((drink) =><DrinkShowById drink={drink} state={false} ></DrinkShowById>)
            
                        }
                    </div>
          
                        <div className="mt-5 d-flex justify-content-center align-items-center">
                            <ReactPaginate
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        </div>
                    </div>
                    <Footer></Footer>
                </>
                    :
                    <GlassCategorySearch state={4}></GlassCategorySearch>

            }

        </div >
    
        </>
    );
};

export default CategoryData;