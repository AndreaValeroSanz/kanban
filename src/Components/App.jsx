import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar.jsx"

function App() {

  return (
    <>
    <div className="px-5">
      <div className="row">
        <div className="menu col-lg-2 bg-primary">

          <p>aqui va el menu lateral</p>

        </div>

        <div className="col-lg-10 bg-secondary">

          <Navbar />

        </div>

      </div>
    </div>
    
    
      <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}

      </Routes>

    </>
  )
}

function AppRouter(){

    return(
      <Router>
        <App />
      </Router>
    )

}
export default AppRouter;
