import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = () => {
  const activeStyle = {
    color: "var(--secondary-text, #121212)",
  };
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Add Vendor
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
