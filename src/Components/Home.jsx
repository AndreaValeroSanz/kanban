import React from "react";
import Navbar from "./BarraNavegacion/Navbar.jsx";
import Menu from "./MenuLateral/Menu.jsx";
import GroupName from "./MenuLateral/GroupName.jsx";
import MyProjects from "./MenuLateral/MyProjects/MyProjects.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
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

        {/* Contenedor principal (Dashboard)*/}
        <div className="py-3 col-lg-10">
          <Dashboard />

          <div className="row pt-5 bg-danger">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla fuga dolores atque earum libero, voluptate dignissimos alias qui sed. Dolorum ut magni ex quia libero ullam, et corrupti laborum quidem dolore error tempore nulla consequatur unde neque soluta consequuntur, ducimus quisquam rerum temporibus quibusdam beatae fuga est? Ut cumque enim eos unde labore nobis exercitationem hic, quidem ad dicta aliquam praesentium doloremque pariatur laudantium quod porro ex perferendis. Omnis quisquam nostrum, esse eaque deleniti nihil. Odit error corrupti consequuntur omnis libero pariatur iure numquam repellat sit impedit ad vel tenetur, animi consequatur voluptatum perferendis expedita itaque totam. Dolores, delectus ullam.</p>
          </div>


        </div>


      </div>

    </div>
  );
}
export default Home;
