import React from "react";
import Navbar from "./Navbar.jsx";
import Menu from "./Menu.jsx";
function Home() {
  return (


    <div className="px-5">
      <div className="row">


        {/* Menu lateral */}
        <div className="menu col-lg-2 bg-primary h-100">
          <Menu />
        </div>

        {/* Barra de navegación */}
        <div className="col-lg-10">
          <Navbar />
        </div>

        
      </div>
    </div>
  );
}
export default Home;
