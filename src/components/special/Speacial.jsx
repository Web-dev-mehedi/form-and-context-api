import React, { useContext } from 'react';
import { AssetContext } from '../grandpa/Grandpha';

const Speacial = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div className='border border-green-200 rounded-lg p-3'>
            <h1>Special</h1>
            <h2>asset : {asset}</h2>
            <h2>asset 2 : {gift}</h2>
        </div>
    );
};

export default Speacial;