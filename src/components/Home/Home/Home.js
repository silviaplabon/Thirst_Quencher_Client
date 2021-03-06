import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarAndCrescent, faStarHalf, faStarOfLife} from '@fortawesome/free-solid-svg-icons'

import HomeDrink from '../../Home/HomeDrink/HomeDrink'
import ReviewCollection from '../Review/ReviewCollection/ReviewCollection';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../../Home/HeaderMain/HeaderMain'
import AboutUs from '../AboutUs/AboutUs';
import Filter from '../../FilterResult/Filter/Filter'
import Header from '../../Shared/Header/Header';
import FeatureShow from '../FeatureShow/FeatureShow';


const Home = () => {
 return(
        <>
        <Header searchOption={false}></Header>
        <HeaderMain></HeaderMain>
        <FeatureShow></FeatureShow>
        <AboutUs></AboutUs>
        <HomeDrink></HomeDrink>
        <Filter></Filter>
        <ReviewCollection></ReviewCollection>
        <Footer ></Footer>
        </>

                             
   );
};

export default Home;