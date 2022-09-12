//rfc
import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        ReactHook
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home 
            </NavLink>
          </li>
          
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ReactHook
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/usestate">
                Use State Demo
              </NavLink>
              <NavLink className="dropdown-item" to="/useeffect">
                Use Effect Demo
              </NavLink>
              <NavLink className="dropdown-item" to="/usecallback">
                Use Callback Demo
              </NavLink>
              <NavLink className="dropdown-item" to="/usememo">
                Use Memo Demo
              </NavLink>
              <NavLink className="dropdown-item" to="/userefdemo">
                Use Ref Demo
              </NavLink>
              <NavLink className="dropdown-item" to="/reduxnumber">
                Demo Number
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux Hook
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/reduxnumber">
                Demo Number
              </NavLink>
              <NavLink className="dropdown-item" to="/reduxfacebookapp">
                Demo Facebook App
              </NavLink>
              
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Router Hook
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/reactform">
                Demo Navigate
              </NavLink>
              
              
            </div>
          </li>
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
