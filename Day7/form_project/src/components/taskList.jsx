import React from 'react'
import '../styles/taskList.css'

export default function TaskList(props) {

 

  return (
    <>
      <div className='todo_style'>
        <i class="fa-solid fa-trash"
          onClick={()=>{
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  )
}
