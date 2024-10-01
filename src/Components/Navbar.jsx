import { useState } from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div class="container">
          <div class="row justify-content-center">

              <div class="custom-search-container">
                <i class="bi bi-search"></i>
                <input
                  type="text"
                  class="custom-search-bar"
                  placeholder="Search for anything..."
                />

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
