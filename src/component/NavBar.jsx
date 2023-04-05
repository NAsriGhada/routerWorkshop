import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={"/categories"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/products"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
