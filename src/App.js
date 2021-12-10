import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";
import CustomNavbar from "./components/CustomNavbar";
import SingleRoom from "./pages/SingleRoom";

function App() {
  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SingleRoom" element={<SingleRoom />} />
          <Route path="/Rooms" element={<Rooms />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
