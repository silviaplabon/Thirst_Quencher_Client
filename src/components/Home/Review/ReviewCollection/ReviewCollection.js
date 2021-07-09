import React, { useEffect, useState } from 'react';
import ReviewStar from '../ReviewStar/ReviewStar';
// import sliderImg from '../../../images/LongIslandTea.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useContext } from 'react';
import './ReviewCollection.css';
import { UserContext } from '../../../../App';


const ReviewCollection = () => {
    const [reviews, setReviews] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        let url = `https://sleepy-plains-42535.herokuapp.com/testimonialsData`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    let data = reviews?.sort(() => Math.random() - Math.random()).slice(0, 5)



    return (
        <div className="container my-5">
            <h1 className="mt-5 text-center  mb-3 py-3 px-2 reviewHeaderFont" style={{ borderRadius: '0.70rem',color:'black' }}>Testimonials</h1>
            <div className="row mx-1" style={{ backgroundColor: '#333', borderRadius: '0.70rem' }}>
                <div className="col-md-5 col-lg-6  ms-0 ps-0 pe-0 col-xs-12 col-sm-12" >
                    <div id="carouselExampleCaptions h-100" className="carousel slide" data-bs-ride="carousel">
                    
                        <div className="carousel-inner p-0">
                            <div className="carousel-item active   h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#27211D', borderRadius: '0.60rem' }}   >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[0]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>
                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="mx-3 text-white captionFontStyle"><span className="quoteColor">"</span>{data[0]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer text-white">
                                            <cite title="Source Title  mt-5">{data[0]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-lg  h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#27211D', borderRadius: '0.50rem' }} >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[1]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>

                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="pStyle mx-3 text-white captionFontStyle"><span className="quoteColor">"</span>{data[1]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer text-white">
                                            <cite title="Source Title mt-5">{data[1]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-lg  h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#27211D', borderRadius: '0.50rem' }} >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[2]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>

                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="pStyle mx-3 text-white captionFontStyle"><span className="quoteColor">"</span>{data[2]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer text-white">
                                            <cite title="Source Title mt-5">{data[2]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-lg  h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#27211D', borderRadius: '0.50rem' }} >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[3]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>

                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="mx-3 pStyle text-white captionFontStyle"><span className="quoteColor">"</span>{data[3]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer text-white">
                                            <cite title="Source Title mt-5">{data[3]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-lg  h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#27211D', borderRadius: '0.80rem' }} >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[4]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>

                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="pStyle mx-3 text-white captionFontStyle"><span className="quoteColor">"</span>{data[4]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer  text-white">
                                            <cite title="Source Title text-white mt-5">{data[4]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden" >Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden"   >Next</span>
                        </button>
                    </div>
                </div>

                <div className="col-md-7 col-lg-6 col-xs-12 col-sm-12 pt-1 p-0 ">
                    {/* <h4 className="text-end mt-5 text-white me-3 h4Style ">TESTIMONIALS</h4> */}
                    <p className="text-end text-white me-3 h6Style pt-5" style={{lineGap:'1px'}}>
                        <span className="spanStyle ">WELCOME to the Thirst Quencher </span>
                        You can choose yourfavourite <br /> drinks. We offer thousands of drinks and have a wide variety <br />of drinks
                        so that  you  can enjoy crowd sourced stored of<br />  drinks and cocktails from around the  world.<br />
                        Please Order now your drink at <br/><span className="spanStyle">Silviaplabon@gmail.com.  </span> </p>
                    <div className="d-flex justify-content-end align-items-end">

                        {
                            loggedInUser.email ? <Link to='/user/AddTestimonials' className=" mt-3 p-2 mb-5 btn btnClass  btnReview1 fw-bold">
                                Add a Review</Link> : <> <Link to='/' className="p-2 mt-3  mb-5 btn btnClass btnReview1 fw-bold">
                                    Add a Review</Link> </>
                        }
                    </div>



                </div>
            </div>




        </div>
    );
};

export default ReviewCollection;