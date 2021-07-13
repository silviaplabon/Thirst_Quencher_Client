import React, { useState } from 'react';
import AddProducts from '../../Admin/AddProducts/AddProducts'
import AdminMaker from '../../Admin/AdminMaker/AdminMaker'
import AdminShipment from '../../Admin/AdminShipment/AdminShipment'
import ManageProducts from '../../Admin/ManageProducts/ManageProducts'
import Header from '../../Shared/Header/Header';
import AllDrinksShowList from '../AllDrinksShowList/AllDrinksShowList';


import './Admin.css'
const Admin = () => {
    const [state, setState] = useState(1);

    return (
        <>
        <Header></Header>

        <div className="containerAdmin">
        <div className="container m-auto">
            <div className="row mx-1">
                <div className="col-md-4 list-group mt-5 mb-5  adminColStyle">
                    <button type="button" onClick={()=>setState(1)} className="list-group-item listAdminStyle  list-group-item-action active hoverStyleAdmin" aria-current="true">
                        Add Products
                    </button>
                    <button type="button" onClick={()=>setState(2)} className="list-group-item listAdminStyle list-group-item-action active hoverStyleAdmin" aria-current="true">
                        Manage Products
                    </button>
                    <button type="button" onClick={()=>setState(3)} className="list-group-item list-group-item-action active  listAdminStyle  hoverStyleAdmin" aria-current="true">
                        Edit Products
                    </button>
                    <button type="button" onClick={()=>setState(4)} className="list-group-item list-group-item-action active  listAdminStyle  hoverStyleAdmin" aria-current="true">
                        Make Admin
                    </button>
                    <button type="button" onClick={()=>setState(5)} className="list-group-item list-group-item-action active  listAdminStyle  hoverStyleAdmin" aria-current="true">
                        Shipment & Payment
                    </button>
                    <button type="button" onClick={()=>setState(6)} className="list-group-item list-group-item-action active  listAdminStyle  hoverStyleAdmin" aria-current="true">
                       Drinks
                    </button>
                    
                </div>
                <div className="col-md-8 mt-4 adminContainerMargin">
                    {
                        state==1 && <AddProducts></AddProducts> 
                    }
                    {
                        (state==2||state==3)&&<ManageProducts></ManageProducts>
                    }
                    {
                        state==4 && <AdminMaker></AdminMaker>
                    }
                     {
                        state==5 && <AdminShipment></AdminShipment>
                    }
                      {
                        state==6 && <AllDrinksShowList></AllDrinksShowList>
                    }

                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Admin;