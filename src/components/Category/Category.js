import React from 'react';

import glassimg from '../../images/glass.jfif';
import alcoholicimg from '../../images/alcoholic.jpg';
import nonalcoholicimg from '../../images/nonalcoholic.jpg';
import categoryimg from '../../images/category.jfif';
const Category = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 mx-5 mt-5">
                <div className="col">
                    <div className="card h-100">   
                       <div className="card-body cardBody h-75">
                        <img src={alcoholicimg} className="card-img-top h-100 w-100" alt="..." />
                        </div>
                        <div className="card-footer">
                            <h5 className="card-title text-center fw-bold">Alcoholic</h5>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                         <div className="card-body cardBody h-75">
                            <img src={nonalcoholicimg} className="card-img-top h-100 w-100 " alt="" />
                        </div>
                        <div className="card-footer">
                            <h5 className="card-title text-center fw-bold">Non Alcoholic</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <div className="card-body cardBody h-75">
                        <img src={categoryimg} className="card-img-top h-100 w-100" alt="..." />
                    </div>
                    <div className="card-footer">
                            <h5 className="card-title text-center fw-bold">Category</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <div className="card-body cardBody h-75">
                        <img src={glassimg} className="card-img-top h-100 w-100" alt="..." />
                        </div>
                        <div className="card-footer">
                            <h5 className="card-title text-center fw-bold">Glass</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;