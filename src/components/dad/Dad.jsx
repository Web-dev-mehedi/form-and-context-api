import React from 'react';
import Myself from '../myself/Myself';
import Brother from '../brother/Brother';
import Sister from '../sister/Sister';

const Dad = ({asset}) => {
    return (
        <div className='p-6 border border-yellow-200 rounded-lg text-4xl space-y-4'>
            <h1>Dad</h1>
             <div className='text-2xl flex gap-4'>
             <Myself asset={asset}></Myself>
            <Brother></Brother>
            <Sister></Sister>
             </div>
        </div>
    );
};

export default Dad;