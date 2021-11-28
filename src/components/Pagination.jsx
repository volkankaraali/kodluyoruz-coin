import React, { useState } from 'react'

function Pagination({ counter, setCounter }) {


    if (counter >= 40) { setCounter(1) } else if (counter <= 1) { setCounter(1) }




    return (
        <div className="text-center text-3xl mt-5 ">
            <button className="px-2 rounded bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:text-black" onClick={() =>
                setCounter(counter - 1)}>&lt;&lt;
            </button>
            <span className="mx-2">{counter}</span>
            <button className="px-2 rounded bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:text-black" onClick={() => setCounter(counter + 1)}>&gt;&gt;</button>
        </div>
    )
}

export default Pagination
