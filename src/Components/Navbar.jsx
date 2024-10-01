import { useState } from "react";
import Searchbar from "./Searchbar";
function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div className=" w-100 d-flex justify-content-between">
          <Searchbar />

          <p>holi</p>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
