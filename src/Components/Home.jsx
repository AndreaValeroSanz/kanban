import React from "react";
import Navbar from "./BarraNavegacion/Navbar.jsx";
import Menu from "./MenuLateral/Menu.jsx";
import GroupName from "./MenuLateral/GroupName.jsx";
function Home() {
  return (
    <div className="px-5 ">
      <div className="row ">
        {/* Menu lateral */}
        <div className="menu col-lg-2 topbar BorderRight">
          <GroupName />
        </div>

        {/* Barra de navegación */}
        <div className="col-lg-10 topbar">
          <Navbar />
        </div>
      </div>

      <div className="row">
        <div className="py-3 col-lg-2 BorderRight">
          <Menu />
        </div>
      </div>
    </div>
  );
}
export default Home;
