import React, { useEffect, useState } from 'react'
import axios from "axios"
import CoinList from './CoinList'

function Searchbar({counter}) {
    
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")




    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${counter}&sparkline=false`
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, [counter]);



    const handleChange = e => {
        setSearch(e.target.value);
    };
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <div className='coin-app'>
            <div className='coin-search flex justify-center -mt-10'>
                <div>
                    <h1 className='coin-text text-center text-white text-3xl'>Search a currency</h1>
                    <form className="">
                        <input
                            className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 placeholder-white w-full px-2  rounded h-9 text- focus:outline-none'
                            type='text'
                            placeholder='Search'
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <CoinList
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h} />
                )

            })}


        </div>
    )
}

export default Searchbar
