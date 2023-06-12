import React, { useState } from 'react'
import data from '../../products.json'
import Product from './product'
import '../../styles/shop.css'
import Search from './search'
export const Shop = () => {

    const [message, setMessage] = useState("");
    const [array, setArray] = useState(data);

    const handleClick = () => {
        setMessage("");
        getProducts(message);
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const getProducts = (messgage) => {
        if (!message) {
            setMessage(data);
        }
        else {
            const filter_array = data.filter((item) => item.name.includes(message));
            setArray(filter_array);
        }
    }

    return (

        <div className='shop'>
            <input type="text" value={message} onChange={handleChange} />
            <button onClick={handleClick}>search </button>
            {array.map((product) => {
                // console.log(item);
                return <Product data={product} />
            })}
        </div>
    )
}
