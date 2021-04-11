import React, { useState } from 'react';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Admin.css'
const Admin = () => {
    const [state, setState] = useState(true);

    return (

        <div className="containerAdmin">
        <div className="container m-auto">
            <div className="row mx-1">
                <div className="col-md-4 list-group mt-5 mb-5  adminColStyle">
                    <button type="button" onClick={()=>setState(true)} class="list-group-item listAdminStyle  list-group-item-action active hoverStyleAdmin" aria-current="true">
                        Add Products
                    </button>
                    <button type="button" onClick={()=>setState(false)} class="list-group-item listAdminStyle list-group-item-action active hoverStyleAdmin" aria-current="true">
                        Manage Products
                    </button>
                    <button type="button" onClick={()=>setState(false)} class="list-group-item list-group-item-action active  listAdminStyle  hoverStyleAdmin" aria-current="true">
                        Edit Products
                    </button>
                </div>
                <div className="col-md-8 mt-5">
                    {
                        state ? <AddProducts></AddProducts> : <ManageProducts></ManageProducts>
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Admin;