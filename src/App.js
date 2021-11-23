import "./App.css";
import React from "react";

import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import { CoinProvider } from "./context/CoinContext";

function App() {

  return (
    <CoinProvider>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </CoinProvider>

  );
}

export default App;
