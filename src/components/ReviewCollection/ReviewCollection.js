import React, { useEffect, useState } from 'react';
import ReviewStar from '../ReviewStar/ReviewStar';
import sliderImg from '../../images/LongIslandTea.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../App';
import './ReviewCollection.css';

const ReviewCollection = () => {
    const [reviews, setReviews] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        let url = `https://sleepy-plains-42535.herokuapp.com/testimonialsData`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data, "data")
            })
    }, [])
    console.log(reviews)
    let data = reviews?.sort(() => Math.random() - Math.random()).slice(0, 5)
    console.log(data)
    return (
        <div className="container">
            <h4 className="mt-5 text-center text-white mb-3 p-2 " style={{ backgroundColor: '#2d524a' }}>Testimonials</h4>
            <div className="row mx-1" style={{ backgroundColor: '#333', borderRadius: '0.70rem' }}>
                <div className="col-md-6 ms-0 ps-0 pe-0 col-xs-12 col-sm-12" >
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        {/* <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div> */}
                        <div className="carousel-inner p-0">
                            <div className="carousel-item active   h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#88c425', borderRadius: '0.60rem' }}   >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[0]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>
                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="mx-3"><span className="quoteColor">"</span>{data[0]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer">
                                            <cite title="Source Title">{data[0]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-lg  h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#88c425', borderRadius: '0.50rem' }} >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[1]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>

                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="pStyle mx-3"><span className="quoteColor">"</span>{data[1]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer">
                                            <cite title="Source Title">{data[1]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-lg  h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#88c425', borderRadius: '0.50rem' }} >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[2]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>

                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="pStyle mx-3"><span className="quoteColor">"</span>{data[2]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer">
                                            <cite title="Source Title">{data[2]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-lg  h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#88c425', borderRadius: '0.50rem' }} >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[3]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>

                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="mx-3 pStyle"><span className="quoteColor">"</span>{data[3]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer">
                                            <cite title="Source Title">{data[3]?.name}</cite>
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item shadow-lg  h-100 rounded card w-100 cardStyle" style={{ backgroundColor: '#88c425', borderRadius: '0.80rem' }} >
                                <div className=" text-center cardBackgroundColor ">
                                    <div className=" h-25 p-2 d-flex justify-content-between align-items-between ">
                                        <img src={data[4]?.image} className="img-fluid imageSlider " />
                                        <div className="d-flex pt-3 pe-5">
                                            <ReviewStar></ReviewStar>
                                        </div>

                                    </div>
                                    <div className="card-body cardBody">
                                        <p className="pStyle mx-3"><span className="quoteColor">"</span>{data[4]?.description}<span className="quoteColor">"</span></p>
                                        <figcaption class="blockquote-footer">
                                            <cite title="Source Title">{data[4]?.name}</cite>
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

                <div className="col-md-6  col-xs-12 col-sm-12 pt-1 ">
                    <h4 className="text-end mt-5 text-white me-3 h4Style ">TESTIMONIALS</h4>
                    <h6 className="text-end text-white me-3 h6Style">
                        <span className="spanStyle">WELCOME to the Silvia,</span>
                        You can choose your favorite drinks.  We offer<br /> thousands of drinks and have a wide varietyof drinks
                        so that  you<br />  can enjoy crowdsourced stored of  drinks and cocktails <br />from aroundthe world.
                        Order now your  drink at<br /> Silviaplabon@gmail.com.   </h6>
                        <div className="d-flex justify-content-end align-items-end">
                        
                           {
                            loggedInUser.email && <Link to='/user/AddTestimonials' className=" mt-3 btn btnReview fw-bold">
                                Add a Review</Link>
                        }

                    </div>
                      
                    

                </div>
            </div>




        </div>
    );
};

export default ReviewCollection;