import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar.jsx"

function App() {

  return (
    <>

    <Navbar />
    
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
