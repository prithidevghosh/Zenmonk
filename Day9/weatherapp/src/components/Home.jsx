import React from 'react'
import { Typography } from 'antd'
import "../styles/home.css"
import Searchbar from './searchbar';
import Result from './result';

export default function Home() {
    const { Title } = Typography;
    return (
        <>
        
            <div className='homeContainer'>
                <Title className="heading">Local Weather App</Title>
                <Searchbar />

            </div>
        </>
    )
}
