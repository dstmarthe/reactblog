import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        WebRef
      </Link>
      <ul className="navbar-nav me-2 mb-2 mb-lg-0">
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
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
);

export default NavBar;
