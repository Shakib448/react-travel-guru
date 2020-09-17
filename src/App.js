import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Booking from "./Components/Booking/Booking";
import BookingList from "./Components/BookingList/BookingList";
import NotFound from "./Components/NotFound/NotFound";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserLoggedIn = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <UserLoggedIn.Provider value={[loggedIn, setLoggedIn]}>
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/booking" component={Booking} />
            <PrivateRoute exact path="/booking/list/">
              <BookingList />
            </PrivateRoute>

            {/* <Route exact path="/booking/list/" component={BookingList} /> */}
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </UserLoggedIn.Provider>
  );
}

export default App;
