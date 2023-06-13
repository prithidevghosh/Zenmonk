import React from 'react'
import '../style/rootPage.css'




export default function Rootpage() {


    function handleClick() {
        alert("this button is clicked")
    }
    function outerDivClick(){
        alert("outer div clicked")
    }
    const innerDivClick=(e)=>{
        e.stopPropagation();
        alert("inner div clicked")
    }
    return (
    <>

        {/* arrow function implemented */}
        <button onClick={()=>handleClick()}>arrow function</button>
    
        <div onClick={()=>outerDivClick()} className='outerDiv'>
            <div onClick={(e)=>innerDivClick(e)} className='innerDiv'>
  
            </div>
        </div>
    </>
    )
}
