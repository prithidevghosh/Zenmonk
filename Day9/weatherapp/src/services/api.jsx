import React from 'react'
import axios from 'axios'
export const fetchData = (search) => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1086c65c7bd4769889ed2ac423154ae1`;
    return axios.get(baseURL)
}