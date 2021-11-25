import React from 'react'
import { useCoin } from '../context/CoinContext'

function Searchbar() {
    const { searchInput, setSearchInput } = useCoin();

    const changeHandler = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <div>
            <input onChange={changeHandler} value={searchInput} type="search" placeholder="search coin" className="border" />
        </div>
    )
}

export default Searchbar
