import React from "react";
import Navbar from "./BarraNavegacion/Navbar.jsx";
import Menu from "./MenuLateral/Menu.jsx";
import GroupName from "./MenuLateral/GroupName.jsx";
import MyProjects from "./MenuLateral/MyProjects/MyProjects.jsx";
function Home() {
  return (
    /* Contenedor Principal  */
    <div className="px-5 ">
      
      {/* Contenedor superior */}
      <div className="row ">

        {/* Contenedor Logo */}
        <div className="menu col-lg-2 topbar BorderRight">
          <GroupName />
        </div>

        {/* Barra de navegación (Búsqueda + Usuario)*/}
        <div className="col-lg-10 topbar">
          <Navbar />
        </div>

      </div>
      
      {/* Contenedor inferior */}
      <div className="row">

        {/* Menú lateral (Navegación + Lista_Proyectos)*/}
        <div className="py-3 col-lg-2 BorderRight">
          <Menu />
          <MyProjects />
        </div>

      </div>

    </div>
  );
}
export default Home;
