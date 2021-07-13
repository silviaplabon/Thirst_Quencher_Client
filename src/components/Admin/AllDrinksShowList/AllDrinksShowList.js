import React, { useEffect, useState } from 'react';
import DrinkFromDB from '../../Home/DrinkFromDB/DrinkFromDB';
import Footer from '../../Shared/Footer/Footer'
import ReactPaginate from "react-paginate";
import './AllDrinksShowList.css'

const AllDrinksShowList = () => {
    const [drinks, setDrinks] = useState([]);
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/allDrinksCollectionShow')
            .then(res => res.json())
            .then(data => {
                setDrinks(data)
                setSpinner(false)
            })
    }, [])
    const [pageNumber, setPageNumber] = useState(0);
    const drinksPerPage = 20;
    const pagesVisited = pageNumber * drinksPerPage;
    let value;
    let i = 0;

    const pageCount = Math.floor(drinks.length / drinksPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };






    return (
        <>
            <div className=" mt-2">
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
                    : <>
                        <h2 className="text-center h1Gallery">All Drinks Collection</h2>
                        <div className="row row-cols-1 row-cols-md-2 mt-5  mb-3">
                            {
                                drinks?.slice(pagesVisited, pagesVisited + drinksPerPage)
                                    .map((drink) => <DrinkFromDB drink={drink}></DrinkFromDB>)
                            }
                        </div>
                        <div className="mt-2 d-flex justify-content-center align-items-center">
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
                        </>
     
                        }
                    </div> 
                          </>

            );


};

            export default AllDrinksShowList;