import React from 'react';
import { useHistory } from 'react-router';

const DrinkShowById = (props) => {
    let history = useHistory();
    const { strDrink,strDrinkThumb,idDrink } = props.drink;
    const handleDetailsId = ((idDrink) => {
        history.push(`/drinksById/${idDrink}`);
    })
    return (
        <div className="col mt-3">
            <div className="card h-100 cardStyle" onClick={() => handleDetailsId(idDrink)}>
                <img src={strDrinkThumb} className="card-img-top" alt="..." />
                <div className="card-body cardBodyStyle">
                    <h6 className="card-title text-center">{strDrink}</h6>
                </div>
            </div>
        </div>

    );
};

export default DrinkShowById;

// import React from 'react';
// import { useHistory } from 'react-router';
// import './Drink.css'
// const Drink = (props) => {
//     const {strDrink,idDrink, strDrinkThumb,strAlcoholic,strCategory,strGlass,strInstructions} = props.drink;
//     let history = useHistory();
//     const handleDetails=((id)=>{
//         history.push(`/drinks/${id}`);
//     })
//     return (
//         <div className="col border-rounded-3 shadow-lg h-75">
//             <div className="card h-100">
//                 <img src={strDrinkThumb} className="card-img-top h-50" alt="..." />
//                 <div className="card-body cardBody h-25">
//                     <h5 className="card-title ">{strDrink}</h5>
//                     <ul className="ulDrink d-flex">
//                     {strCategory ? <li className="liDrink">{strCategory}</li>:' '}-
//                     {strGlass ? <li className="liDrink">{strGlass}</li>:' '}
//                     </ul>
//                  {strAlcoholic ?<p class="lead"> {strAlcoholic}</p>:' '} 
//                  <button onClick={()=>handleDetails(idDrink)} className="btn w-25 p-1 bg-primary h-25">Details</button>
//                  </div>
//             </div>
//         </div>
//     );
// };

// export default Drink;