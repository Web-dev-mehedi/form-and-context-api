import React, { useContext } from 'react';
import { AssetContext } from '../grandpa/Grandpha';

const Cousin = ({name,asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div className='border border-green-200 rounded-lg p-3'>
             {name} <br></br>
             <span>asset : </span>
             {
              asset ? asset:"nai"
             }
             <h3>{gift}</h3>
        </div>
    );
};

export default Cousin;