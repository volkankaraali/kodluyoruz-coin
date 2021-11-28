import "./App.css";
import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import Pagination from "./components/Pagination";


function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div>

      <Searchbar counter={counter} setCounter={setCounter} />
      <Pagination counter={counter} setCounter={setCounter} />
      
    </div>
  );
}

export default App;
