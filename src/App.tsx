import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import SingleRoom from "../pages/VipRoom";
import ErrorPage from "../pages/ErrorPage";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Rooms">
            <Rooms />
          </Route>
          <Route path="/VipRoom">
            <VipRoom />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;


export default App;