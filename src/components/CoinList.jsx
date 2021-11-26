import React, { useEffect, useState } from 'react'
import { useCoin } from '../context/CoinContext'

function CoinList() {

    const { searchInput, allCoins } = useCoin();
    const [searchCoins, setSearchCoins] = useState([])

    useEffect(() => {
        let searchedCoins = allCoins.filter(item => {
            if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return item
            } else return false
        })
        setSearchCoins(searchedCoins)
    }, [allCoins, searchInput])

    return (
        <div>
            {
                searchInput !== "" ? searchCoins.map((item, i) => (<div key={i}>{item.name}</div>)) : false

            }
        </div>
    )
}

export default CoinList
