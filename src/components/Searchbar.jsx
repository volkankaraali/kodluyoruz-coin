import React, { useEffect, useState } from 'react'
import axios from "axios"
import CoinList from './CoinList'

function Searchbar({ counter, currency }) {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    const [first250Coin, setFirst250Coin] = useState([])



    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${counter}&sparkline=true`)
            .then(res => {
                setCoins(res.data);

            })
            .catch(error => console.log(error));

    }, [counter, currency]);

    useEffect(() => {

        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
            .then(res => {
                setFirst250Coin(res.data);

            })
            .catch(error => console.log(error));
    }, [currency])


    const handleChange = e => {
        setSearch(e.target.value);
    };
    const filteredCoins = first250Coin.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className='coin-app'>
            <div className='coin-search flex justify-center -mt-10'>

                <div>
                    <h1 className='coin-text text-center text-white text-3xl'>Search a currency</h1>
                    <form className="text-center    ">
                        <input
                            className='w-52 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 placeholder-white px-2  rounded h-9 text- focus:outline-none'
                            type='text'
                            placeholder='Search'
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
            {

                search === "" ? (coins.map(coin => {
                    return (
                        <CoinList
                            key={coin.id}
                            id={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                            currency={currency}
                        />
                    )

                }))
                    : (filteredCoins.map(coin => {
                        return (
                            <CoinList
                                key={coin.id}
                                name={coin.name}
                                price={coin.current_price}
                                symbol={coin.symbol}
                                marketcap={coin.total_volume}
                                volume={coin.market_cap}
                                image={coin.image}
                                priceChange={coin.price_change_percentage_24h}
                                currency={currency} />
                        )

                    }))


            }


        </div>
    )
}

export default Searchbar
