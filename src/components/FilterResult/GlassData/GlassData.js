import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import DrinkShowById from '../../Home/DrinkShowById/DrinkShowById';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ReactPaginate from "react-paginate";
import GlassCategorySearch from '../GlassCategorySearch/GlassCategorySearch';
const GlassData = () => {
    const [drinks, setDrinks] = useState([]);
    const { name } = useParams();
    const [state, setState] = useState(false);
    const [glass, setGlass] = useState([])
    useEffect(() => {
        
        let url = ` https://sleepy-plains-42535.herokuapp.com/GlassDataByName/${name}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                    setDrinks(data)   
            })
    }, [name])
    const sliceDrinks=drinks.slice(0,15);
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
                drinks.length>0 ?<><Header></Header>
                    <div className="container mb-5">
                        <h5 className="text-center mt-4">Browse Glass</h5>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                        {
                                drinks?.slice(pagesVisited, pagesVisited + drinksPerPage)
                                    .map((drink) =><DrinkShowById drink={drink} state={false} ></DrinkShowById>)
            
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
                    </div> <Footer></Footer></>
                    :<GlassCategorySearch state={3}></GlassCategorySearch>
            }
        </div>
      
        </>
    );
};

export default GlassData;