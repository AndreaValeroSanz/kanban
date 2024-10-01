import { useState } from "react";
import Users from "./Users";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary d-flex justify-content-between">
        
        <div className="input-group rounded w-25">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
          <i className="bi bi-search"></i>
          </span>
          <Users />
        
        </div>
      </nav>
    </>
  );
}
export default Navbar;
