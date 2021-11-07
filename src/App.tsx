import React from 'react';
import '../assets/styles/sass/index.scss';
import { BrowserRouter as  Switch , Router, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import CustomNavbar  from '../components/CustomNavbar';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import SingleRoom from '../pages/VipRoom';
import ErrorPage from '../pages/ErrorPage';

function App(){
  return (
    <>
    <ToastContainer theme="colored" />  
    <CustomNavbar />   
      <Router>
      <Switch>
        <Route  path="/"> <Home/>  </Route>
        <Route  path="/rooms/"> <Rooms/>  </Route>
        <Route  path="/rooms/:slug"> <VipRoom/>  </Route>
        <Route> <ErrorPage/>  </Route>
      </Switch>
      </Router>
 </>
  );
}

export default App;
