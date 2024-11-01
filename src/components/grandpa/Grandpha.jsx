import React, { createContext, useState } from 'react';
import Dad from '../dad/Dad';
import Uncle from '../uncle/Uncle';
import Aunty from '../aunty/Aunty';


export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);


const Grandpha = () => {
    const asset = 'diamond'
    const [money,setMoney] = useState(1000)
    return (
        <div className='text-center text-6xl border-4 border-red-200 py-10' >
            <h1>Grandpa</h1>
            <p>money : {money}</p>
              <MoneyContext.Provider value={[money,setMoney]}>
                <AssetContext.Provider value='gold'>
                        <div className='flex justify-center items-center gap-6'>
                            <Dad asset={asset}></Dad>
                            <Uncle></Uncle>
                            <Aunty asset={asset}></Aunty>
                        </div>
                    </AssetContext.Provider>
              </MoneyContext.Provider>
        </div>
    );
};

export default Grandpha;