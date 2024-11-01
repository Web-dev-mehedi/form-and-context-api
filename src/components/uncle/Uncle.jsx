import React from 'react';
import Cousin from '../cousin/Cousin';

const Uncle = () => {
    return (
        <div className='p-6 border border-yellow-200 text-4xl space-y-4 rounded-lg'>
            <h1>uncle</h1>
             <div>
                 <Cousin name={'joan'}></Cousin>
             </div>
        </div>
    );
};

export default Uncle;