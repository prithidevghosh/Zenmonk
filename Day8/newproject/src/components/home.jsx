import React, { useState } from 'react';
import "../styles/home.css";

export default function Home() {
    const [value, setValue] = useState(0);
    const [toggleValue, setToggleValue] = useState(0);
    const [names, setNames] = useState([]);

    const increment = () => {
        setToggleValue((prev) => prev + 1);
    };

    const decrement = () => {
        setToggleValue((prev) => prev - 1);
    };

    const valueChange = () => {
        setValue(1);
    };
    const [name, setName] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newNames = [...names, { id: names.length, name }];
        setNames(newNames);
        setName("");
    };



    return (
        <>
            <div>
                <p>Hi, this is {value}</p>
                <br />
                <button onClick={valueChange}>Click</button>
            </div>
            <hr />
            <div>
                <button onClick={increment}>+</button>
                <p>{toggleValue}</p>
                <button onClick={decrement}>-</button>
            </div>
            <hr />
            <form>
                <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={handleSubmit}>submit</button>
                {names.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))}
            </form>
        </>
    );
}
