import { Route, Switch } from "react-router-dom";
import React from "react";
import './App.css';
import Header from '../Header/Header'
import Techs from "../Main/Techs/Techs";
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <div className="page">
      <Header />
      <Techs />
      { }
      <Footer />
    </div>
  );
}

export default App;
