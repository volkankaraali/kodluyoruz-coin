import "./App.css";
import axios from "axios"
import React, {useState, useEffect} from "react"

function App() {

  const [coins, setCoins] = useState([])


  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true")
    .then(res =>{
      setCoins(res.data)
      console.log(res.data)
    })
},[])



  return <div className="App">
    
  </div>
}

export default App;
