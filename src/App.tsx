import React from 'react';
import '../assets/styles/sass/index.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import SingleRoom from '../pages/VIPRoom';
import ErrorPage from '../pages/ErrorPage';

function App(){
  return (
    <>
    <ToastContainer theme="colored" />  
    <Navbar />   
      <Router>
      <Switch>
        <Route exact path="/"> <Home/>  </Route>
        <Route exact path="/rooms/"> <Rooms/>  </Route>
        <Route exact path="/rooms/:slug"> <VIPRoom/>  </Route>
        <Route> <ErrorPage/>  </Route>
      </Switch>
      </Router>
 </>
  );
}

export default App;
