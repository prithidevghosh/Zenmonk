import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectCount} from "./CounterSlice"
export default function ShowInput() {
    const value = useSelector(selectCount)
    return (

        <div>{value}</div>
    )
}
