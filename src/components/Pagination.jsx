import React, { useState } from 'react'

function Pagination({counter, setCounter}) {

   
        if(counter>=40){setCounter(1)} else if (counter <=1) {setCounter(1)}




    return (
        <div className="text-center text-3xl mt-5 ">
        
        <button className="hover:text-red-500"  onClick={()=> 
           setCounter(counter-1)}>&lt;&lt; </button>    <span>{counter}</span> <button className="hover:text-red-500" onClick={()=> setCounter(counter+1)}>&gt;&gt;</button>
      </div>
    )
}

export default Pagination
