import React, { useContext } from 'react';
import { MoneyContext } from '../grandpa/Grandpha';

const Brother = () => {

    const [money] = useContext(MoneyContext)
    return (
        <div className='border border-green-200 rounded-lg p-3'>
             <h1>Brother</h1>

             <p>{money}</p>
        </div>
    );
};

export default Brother;