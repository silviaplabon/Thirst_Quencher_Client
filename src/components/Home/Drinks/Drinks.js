
import React, { useContext, useEffect, useState } from 'react';
import './Drinks.css'
import Header, { SearchContext } from '../../Shared/Header/Header';
import DrinkShowById from '../../Home/DrinkShowById/DrinkShowById'
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import ReactPaginate from "react-paginate";


const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    const { name } = useParams();
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        let url = `https://sleepy-plains-42535.herokuapp.com/searchDrinksByName/${name}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => { setDrinks(data); console.log(data); setSpinner(false); })
    }, [])

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
        <><Header></Header>
            <div className="containerColor mt-4">
                {spinner ?
                    <div className="text-center  mb-5 pt-5 pb-5">
                        <div className="spinner-grow spinnerColor" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow spinnerColor" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow spinnerColor" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container mt-5">
                        <h5 className="text-center pt-4">Browse Search Result</h5>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-5">
                            {
                                drinks?.slice(pagesVisited, pagesVisited + drinksPerPage)
                                    .map((drink) => <DrinkShowById drink={drink} state={true} ></DrinkShowById>)
                            }
                        </div>
                        <div className="mt-5 d-flex justify-content-center align-items-center">
                            <ReactPaginate
                                previousLabel={"Previous"}
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
                }
            </div>
            <Footer></Footer>
        </>
    )
};

export default Drinks;















