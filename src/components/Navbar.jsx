import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-center p-3 navbar-bg">
        <div className="row">
          <div className="col">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/registration"> Registration </NavLink>
            <NavLink to="/edit"> Edit </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
