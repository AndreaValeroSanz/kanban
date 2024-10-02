import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home.jsx';

function App() {

  return (
    <>
    
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
