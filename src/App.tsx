import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";
import VipRoom from "./pages/VipRoom";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <>
      <Router>
        
          <Routes>
            <Route path="/Home" element={<Home />} />

            <Route path="/Rooms" element={<Rooms />} />

            <Route path="/VipRoom" element={<VipRoom />} />
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
