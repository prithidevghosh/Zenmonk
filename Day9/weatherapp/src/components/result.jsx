import React from 'react'
import "../styles/result.css"
import { Card } from 'antd';
export default function Result(props) {
    console.log(props);
    // console.log(props);(props.data.data.weather[0].id / 100).toFixed(0)}
    const src = `https://openweathermap.org/img/wn/${props.data.data.weather[0].icon}@2x.png`
    return (
        <Card
            title={props.data.data.name}
            bordered={false}

            style={{
                width: "86%",
                height: "auto",
                margin: "auto",
                backgroundColor: "rgba(255, 255, 255, .15)",
                backdropFilter: "blur(5px)"
            }}
            className='card'
        >

            <img style={{ float: "right", marginTop: "-7.5em" }}
                src={src} />
            <div className='info_container'>
           <div> <i style={{color:"#ffa940"}} class="fa-solid fa-sun"></i>{(props.data.data.main.temp / 10).toFixed(0)}
            <strong>℃</strong><br></br></div>
            <div><i style={{color:"#cf1322"}} class="fa-solid fa-temperature-high"></i> {(props.data.data.main.temp_max / 10).toFixed(2)}
            <strong>℃</strong><br></br></div>
            <div><i style={{color:"#85a5ff"}} class="fa-solid fa-temperature-low"></i> {(props.data.data.main.temp_min / 10).toFixed(2)}
            <strong>℃</strong><br></br></div>
            <div><i style={{color:"#8c8c8c"}} class="fa-solid fa-wind"></i><span>{props.data.data.wind.speed}</span></div>
            </div>
           
        </Card >
    )
}
