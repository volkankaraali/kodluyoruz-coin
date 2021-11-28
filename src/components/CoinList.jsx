import React, { useEffect, useState } from 'react'
import currenciesData from '../currencyData.json'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import axios from 'axios';




function CoinList({ name, price, symbol, marketcap, volume, image, priceChange, currency }) {

  //console.log(currenciesData);
  let currencySymbol = Object.entries(currenciesData).find(([key, value]) => {
    if (key.toLowerCase() === currency.toLowerCase()) {
      return value
    } else return false
  })
  return (



    <div className="coin-container  ">
      <div className="coin-row ">
        <div className="coin ">
          <img className="h-3" src={image} alt="crypto" />
          <h1 >{name}</h1>
          <p className="coin-symbol pr-20">({symbol})</p>
        </div>
        <div className="coin-data ">
          <p className="coin-price mr-5"> <span className="block ">Price</span> <span className="block ">{currencySymbol[1].symbol}{price.toLocaleString()}</span></p>
          <p className="coin-volume"><span className="block ">Market Volume </span ><span className="block ">{currencySymbol[1].symbol}{volume.toLocaleString()}</span></p>
          {priceChange < 0 ? (
            <p className='coin-percent red my-auto'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green my-auto'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            <span className="block ">Market Cap </span> <span className="block ">{currencySymbol[1]?.symbol}{marketcap.toLocaleString()}</span>
          </p>

        </div>
      </div>

    </div>

  )
}

export default CoinList
