import React from 'react'
import { useCoin } from '../context/CoinContext'
import CoinList from './CoinList'
import Searchbar from './Searchbar'

function Home() {

    const { currenciesData, setCurrency } = useCoin();


    const currencyChangeHandler = (e) => {
        setCurrency(e.target.value.toLowerCase())
    }


    return (
        <>

            <div>
                <select name="" id="" onChange={currencyChangeHandler}>
                    {
                        Object.keys(currenciesData).map((key, i) => (
                            <option key={i} value={key} >{key}</option>
                        ))
                    }
                </select>
            </div>

            <Searchbar></Searchbar>
            <CoinList></CoinList>

        </>
    )
}

export default Home
