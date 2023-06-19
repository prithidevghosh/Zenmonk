import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addString } from './CounterSlice'
export default function Counter() {
    
    const dispatch=useDispatch();
    const [value,setValue]= useState("");
    return (
        <div>
           <input type='text' onChange={(e)=>setValue(e.target.value)}/>
           <button onClick={()=>dispatch(addString(value))}>add string</button> 
        </div>

    )
}
