import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './GlassCategoryListShow.css'
const GlassCategoryListShow = (props) => {
    const state=props.state;
    const history=useHistory();

    const handleDataShow = (name) => {
        {
            state==true && history.push(`/filter/glass/${name}`)
        }
        {
            state==false && history.push(`/filter/category/${name}`)
        }   
    }
    let data;
    {
        state==true ?data=props.data.strGlass :data=props.data.strCategory
    }
    
    return (
            <div className="col mt-2 "onClick={()=>handleDataShow(data)}>
            <div className="card h-25 shadow colCategoryGlass" >
              <div className="card-body h-25">
                   <h6 className="card-title text-center text-white">{data}</h6>              
              </div>
            </div>
          </div>
        
    );
};

export default GlassCategoryListShow;
// useEffect(() => {
//     { 
//          state==false &&
//             fetch(' https://sleepy-plains-42535.herokuapp.com/categoryList', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(props.data)
            // })
            //     .then(res => res.json())
            //     .then(data => {
//                     if (data) {
//                         console.log(data)
//                         alert('updated') 
//                     }
//                 })

//     }

// }, [data])