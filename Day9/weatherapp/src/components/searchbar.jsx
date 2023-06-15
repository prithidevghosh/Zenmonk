import React from 'react'
import { useEffect, useState } from 'react';
import "../styles/searchbar.css"
import { Typography } from 'antd'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import axios from 'axios'
import Result from './result';
// import { getWeather } from "../services/api"
import { fetchData } from '../services/api';
export default function Searchbar() {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("kolkata");
    const { Title } = Typography;
    const { Search } = Input;

    useEffect(() => {
        const fetchApi = async () => {
            // const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1086c65c7bd4769889ed2ac423154ae1`;
            const response = fetchData(search)
                .then((data) =>
                    setCity(data)
                )
                .catch((err) => console.log(err))
        }

        fetchApi();

    }, [search])



    return (
        <>
            <div className='container'>
                <Title className='search_heading' level={3}>Search with city name</Title>
                <Input placeholder="Kolkata"
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: "100%", marginTop: "2em",
                        backgroundColor: "rgb(147, 146, 146)", marginRight: "1em", backgroundColor: "rgba(255, 255, 255, .15)",
                        backdropFilter: "blur(5px)"
                    }} />


            </div>
            {city ? <Result data={city} /> : <p>loading</p>}
        </>
    )
}
