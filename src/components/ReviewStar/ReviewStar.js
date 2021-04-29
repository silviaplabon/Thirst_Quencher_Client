import React, { useEffect, useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarAndCrescent, faStarHalf, faStarOfLife} from '@fortawesome/free-solid-svg-icons'

import './ReviewStar.css'
const TestimonialDetailShow = () => {

 
  return(
         <>
            <FontAwesomeIcon icon={faStar} className="icon " />
            <FontAwesomeIcon icon={faStar} className="icon " />
            <FontAwesomeIcon icon={faStar} className="icon " />
            <FontAwesomeIcon icon={faStar} className="icon " />
            <FontAwesomeIcon icon={faStar} className="icon " />
         </>               

                              
    );
};

export default TestimonialDetailShow;