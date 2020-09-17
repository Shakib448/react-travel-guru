import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../Resources/Logo.png";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <div className="navbar container">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="" className="img-fluid" />
            </NavLink>
            <form className="form-inline my-2 my-lg-0 ">
              <SearchIcon className="navbar__icon" />
              <input
                className="form-control mr-sm-2  navbar__input"
                type="search"
                placeholder="Search Your Destination"
                aria-label="Search"
              />
            </form>
            <li className="nav-item active navbar__activeHover">
              <NavLink
                exact
                activeClassName="navbar__activeStyle"
                className="nav-link navbar__textHover "
                to="/booking/list/"
              >
                News
              </NavLink>
            </li>
            <li className="nav-item active navbar__activeHover">
              <NavLink
                exact
                activeClassName="navbar__activeStyle"
                className="nav-link navbar__textHover"
                to="/booking"
              >
                Destination
              </NavLink>
            </li>
            <li className="nav-item active navbar__activeHover">
              <NavLink
                exact
                activeClassName="navbar__activeStyle"
                className="nav-link navbar__textHover"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item active navbar__activeHover">
              <NavLink className="nav-link navbar__textHover" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item active navbar__active ">
              <NavLink className="nav-link navbar__text" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
