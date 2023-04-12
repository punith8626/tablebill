import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "var(--secondary-text, #fff)",
  };
  return (
    <header className="navbar sticky-top flex-md-nowrap py-3">
      <input
        className="form-control form-control-dark rounded-2 border-0 w-25"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="navbar-nav flex-row justify-content-center align-items-center flex-wrap">
        <div className="nav-item text-nowrap ">
          <NavLink
            to="/vendors/addvendor"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="btn btn-danger"
          >
            <i className="fa fa-user" aria-hidden="true"></i>
            Add Vendor
          </NavLink>
        </div>
        <div className="nav-item text-nowrap mx-3 ">
          <i className="fa fa-user" aria-hidden="true"></i>
          Admin
        </div>
        <div className="nav-item text-nowrap  me-3">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </div>
        <div className="nav-item text-nowrap ">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
