import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Banner />
      </Router>
    </div>
  );
}

export default App;
