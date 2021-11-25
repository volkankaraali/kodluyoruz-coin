import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import currenciesData from "../currencyData.json"
const CoinContext = createContext();

export const CoinProvider = ({ children }) => {

    const [currency, setCurrency] = useState("usd")
    const [searchInput, setSearchInput] = useState("")

    const [allCoins, setAllCoins] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/list")
            .then(result => {
                setAllCoins(result.data)
            })
    }, [])

    useEffect(() => {

    }, [currency])
    console.log(currency);

    const values = {
        currency,
        searchInput,
        setSearchInput,
        allCoins,
        currenciesData,
        setCurrency,
    }
    return <CoinContext.Provider value={values} >{children}</CoinContext.Provider>
}

export const useCoin = () => useContext(CoinContext)