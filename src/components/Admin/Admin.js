import React, { useState } from 'react';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';
const Admin = () => {
    const [state, setState] = useState(true);

    return (
        <div className="container m-auto">
            <div className="row">
                <div className="col-md-4 list-group">
                    <button type="button" onClick={()=>setState(true)} class="list-group-item list-group-item-action active" aria-current="true">
                        Add Products
                    </button>
                    <button type="button" onClick={()=>setState(false)} class="list-group-item list-group-item-action active" aria-current="true">
                        Manage Products
                    </button>
                    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                        Edit Products
                    </button>
                </div>
                <div className="col-md-8">
                    {
                        state ? <AddProducts></AddProducts> : <ManageProducts></ManageProducts>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;