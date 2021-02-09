import React from "react";
import { Link } from "react-router-dom";
import "bootstrap";

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <Link to="/">WebRef</Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/articles-list">Articles</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#responsiveNav"
        aria-controls="basic-navbar-nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
);

export default NavBar;
