import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Booking from "./Components/Booking/Booking";
import BookingList from "./Components/BookingList/BookingList";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/book/list/" component={BookingList} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
