import React from 'react';
import BookDetailShow from '../BookDetailShow/BookDetailShow';
import './ShipmentDetailsShow.css'

const ShipmentDetailsShow = (props) => {
    const {order,type,destination,orderTime}=props.book;
    console.log(type,destination,orderTime);
    
    return (
                        <div className="">
                      
                                {
                                    order.map(detail => <BookDetailShow detail={detail} time={orderTime} serviceType={type} address={destination}></BookDetailShow>)
                                }
                
                        </div>
    );
};

export default ShipmentDetailsShow;