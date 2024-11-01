import React, { useContext } from 'react';
import Cousin from '../cousin/Cousin';
import { MoneyContext } from '../grandpa/Grandpha';



const Aunty = ({asset}) => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div className='p-6 border border-yellow-200 text-4xl space-y-4 rounded-lg'>
            <h1>Aunty</h1>
            <div className='space-y-2'>
                 <Cousin  name={'tom'}></Cousin>
                 <Cousin  name={'Anderson'} asset={asset}></Cousin>
            </div>
            <p>Money : {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000 taka</button>
        </div>
    );
};

export default Aunty;