import React from 'react';
import { useParams } from 'react-router';
import GlassCategorySearch from '../GlassCategorySearch/GlassCategorySearch';

const Glass = () => {
    const {name}=useParams();
    
    return (
        <div>
            <GlassCategorySearch state="true"></GlassCategorySearch>
        </div>
    );
};

export default Glass;