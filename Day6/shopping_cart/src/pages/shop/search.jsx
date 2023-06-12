import React from 'react'
import data from '../../products.json'
export default function Search() {
    return (<>
        <input type='text'/> 
        <button>search</button>
        {data.map((product) => {
                // console.log(item);
               console.log(product);
            })}
        </>
    )
}
