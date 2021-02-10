import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
    <Link className="navbar-brand ms-3" to="/">
      WebRef
    </Link>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto me-3">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/articles-list">
            Articles
          </Link>
        </li>
      </ul>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
);

export default NavBar;
