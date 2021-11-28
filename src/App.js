import "./App.css";
import React, { useState } from "react"
import Searchbar from "./components/Searchbar";
import Pagination from "./components/Pagination";
import currenciesData from '../src/currencyData.json'

function App() {
  const [counter, setCounter] = useState(1)
  const [currency, setCurrency] = useState("usd")
  const currencyChangeHandler = (e) => {
    setCurrency(e.target.value);
  };
  return (

    <div className="">
      <div className="flex justify-center pt-2">
        <select className="w-16  right-0 " value={currency} onChange={currencyChangeHandler} name="" id="">
          {
            Object.keys(currenciesData).map((key, i) => (
              <option key={i} value={key} >{key}</option>
            ))
          }
        </select>
      </div>
      <Searchbar currency={currency} counter={counter} setCounter={setCounter} />
      <Pagination counter={counter} currency={currency} setCounter={setCounter} />

    </div>
  );
}

export default App;
