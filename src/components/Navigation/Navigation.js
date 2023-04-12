import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const activeStyle = {
    color: "var(--secondary-text, #000)",
  };
  return (
    <div className="sidebar col-md-3 col-lg-2 d-md-block collapse">
      <Link to="/" className="navbar-brand col-md-3 col-lg-2 me-0 p-4 fs-8">
        <i className="fa fa-calculator" aria-hidden="true"></i>
        Table Bill
      </Link>
      <nav id="sidebarMenu">
        <div className="position-sticky pt-3 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link "
              >
                <i className="fa fa-home" aria-hidden="true"></i>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/tables"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                <i className="fa fa-th" aria-hidden="true"></i>
                Tables
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                Orders & Billing
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                <i className="fa fa-wrench" aria-hidden="true"></i>
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                <i className="fa fa-user" aria-hidden="true"></i>
                Inventory
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                <i className="fa fa-file" aria-hidden="true"></i>
                CRM
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                <i className="fa fa-rocket" aria-hidden="true"></i>
                Accounting
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/vendors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                <i className="fa fa-rocket" aria-hidden="true"></i>
                Vendors
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
