import React from 'react';
import AddMessage from '../../Users/AddMessage/AddMessage'
import './Footer.css'
const Footer = () => {
    return (
        <div className="" style={{ backgroundColor: '#000000' }}>
            <div className="container">
                <div className="row pt-5 mt-3 text-white rowStyle">
                    <div className="col-md-3  col-sm-3 col-xs-6 col1Style">
                        <ul><h5>Need Help?</h5>
                            <li className="liFontFooter">Customer Service</li>
                            <li className="liFontFooter">Where is my Order?</li>
                            <li className="liFontFooter">Contact US</li>
                            <li className="liFontFooter">Shipping & Payment</li>
                            <li className="liFontFooter">Gift Certificates</li>
                            <li className="liFontFooter">Return & Exchanges</li>
                            <li className="liFontFooter">Pricing</li>
                        </ul>
                    </div>
                    <div className="col-md-3  col-sm-3 col-xs-6 col2Style">
                        <ul><h5>Visit US</h5>
                            <li className="liFontFooter">Getting Here</li>
                            <li className="liFontFooter">Parking</li>
                            <li className="liFontFooter">Where to Eat</li>
                            <li className="liFontFooter">Seating</li>
                            <li className="liFontFooter">Accessibility</li>
                            <li className="liFontFooter">FAQs</li>

                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-2 col3Style">
                        <ul><h5>About</h5>
                            <li className="liFontFooter">Our Story</li>
                            <li className="liFontFooter">Benefits</li>
                            <li className="liFontFooter">Team</li>
                            <li className="liFontFooter">Carrers</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-4 addMessageSection">
                        <AddMessage></AddMessage>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;