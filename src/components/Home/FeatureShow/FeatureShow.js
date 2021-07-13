import React from 'react';
import './FeatureShow.css'

const FeatureShow = () => {
    const features = [
        {
            name: '',
            time: ''
        },
        {
            name: '',
            time: ''
        }
    ]
    return (
        <div className="container mt-5">
        <div className="row row-cols-2 ">
            <div className="col h-100 ">
              
                    <div className="card offSection py-5">
                            <div className="pe-3 padding3">
                                <h2 className="text-end text-white  h2HeaderMainTitle h2TitleFeature">20% of all products</h2>
                                <p className=" text-end text-white h6HeaderMainFont pTimeFeature">On all weekend sales</p>
                                <h6 className="text-end text-white h6HeaderMainFont h6ShopNow">Shop Now</h6>
                            </div>
                                   </div>
                </div>
                <div className="col h-100">
                <div className="card shippingSection py-5">
                <div className="pe-3 padding3">
                                <h2 className="text-end text-white   h2HeaderMainTitle h2TitleFeature">Free Shipping</h2>
                                <p className=" text-end text-white h6HeaderMainFont pTimeFeature">On Order Over $500</p>
                                <h6 className="text-end text-white h6HeaderMainFont h6ShopNow">Shop Now</h6>
                            </div>
                </div>
                </div>

            </div></div>
            );
};

            export default FeatureShow;