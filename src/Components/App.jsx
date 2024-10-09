import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home.jsx';

/* App genera la página haciendo llamadas a los componentes */
function App() {

  return (
    <>
       {/* Rutas de componentes */}
      <Routes>
      <Route path="/" element={<Home />} />
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
