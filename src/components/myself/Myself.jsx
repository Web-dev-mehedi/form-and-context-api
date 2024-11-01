import React from 'react';
import Speacial from '../special/Speacial';

const Myself = ({asset}) => {
    return (
        <div className='border border-green-200 rounded-lg p-3 space-y-3'>
            <h1>Myself</h1>
            <Speacial asset={asset}></Speacial>
        </div>
    );
};

export default Myself;