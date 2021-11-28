import React from 'react'

function CoinList({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) {
  return (
  
    <div className="coin-container flex justify-center">
      <div className="coin-row flex flex-row justify-start items-center">
        <div className="coin flex items-center">
          <img className="h-3" src={image} alt="crypto" />
          <h1 >{name}</h1>
          <p className="coin-symbol pr-20">({symbol})</p>
        </div>
        <div className="coin-data flex justify-between w-full">
          <p className="coin-price "> Price: ${price}</p>
          <p className="coin-volume ">Market Volume: ${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Market Cap: ${marketcap.toLocaleString()}
          </p>
          
        </div>
      </div>
      
    </div>
 
  )
}

export default CoinList
