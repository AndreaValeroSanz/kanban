import { useState } from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="input-group rounded w-25">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
          <i class="bi bi-search"></i>
          </span>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
