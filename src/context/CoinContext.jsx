import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CoinContext = createContext();

export const CoinProvider = ({ children }) => {

    const [currencies, setCurrencies] = useState([])
    const [currency, setCurrency] = useState()

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies').then(result => {
            console.log(result.data);
            setCurrencies(result.data)
        })
    }, [])

    const values = {
        currencies,
        setCurrencies,
        currency
    }
    return <CoinContext.Provider value={values} >{children}</CoinContext.Provider>
}

export const useCoin = () => useContext(CoinContext)