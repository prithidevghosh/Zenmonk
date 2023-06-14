import React, { useState } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../styles/layout.css'
import TaskList from '../components/taskList'
// import { isInputElement } from 'react-router-dom/dist/dom';

export default function Layout() {

    // const [task, setTask] = useState("");
    // const [date, setDate] = useState("");
    // const [data, setData] = useState({ task: "", date: "" });
    // const [finalTask, setFinalTask] = useState("");
    // const [finalDate, setFinalDate] = useState("");
    // const [trueValue, setTrueValue] = useState(false);

    // function handleTaksChange(e) {
    //     setTask(e.target.value)
    //     console.log(e.target.value);
    // }

    // function handleDateChange(e) {
    //     setDate(e.target.value)
    //     console.log(e.target.value);
    // }

    // function handleSubmit(e) {

    //     e.preventDefault()
    //     setFinalTask(task);
    //     setFinalDate(date)

    //     // setTrueValue(true)



    // }

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const itemEvent = (e) => {
        setInputList(e.target.value)
    }
    const deleteItems = (id) => {
        console.log("deleted");
        setItems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                  return index!== id;
            })
        })
    }

    const listOfItems = () => {
        if(inputList.length==0){
            alert("value neede")
        }else{
        setItems((olditems) => {
            return [...olditems, inputList];
        })
    }
        setInputList("")
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type='text'
                        value={inputList}
                        placeholder='Add a item' onChange={itemEvent} required/>
                    {/* <input type='date'/> */}
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {items.map((itemval, index) => {
                            return <TaskList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                            />
                        })}
                    </ol>
                </div>

            </div>

        </>
    );
}
