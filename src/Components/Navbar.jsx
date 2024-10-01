import { useState } from "react";
import Searchbar from "./Searchbar";
import Users from "./Users";
function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div className=" w-100 d-flex justify-content-between">
          <Searchbar />

          <Users />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
