import React from 'react'
import "../styles/showTask.css"
import { selectTask } from "../feature/taskSlice"
import { useSelector } from 'react-redux'

export default function ShowTask() {
    let tasks = useSelector(selectTask);
    return (
        <>
            {tasks.map((task) => {

                return <p>{task.task_desc}</p>
            })}
        </>
    )
}
